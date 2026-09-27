const SCRAMBLE_GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghkmnpqrstuvwxyz0123456789#$%&*+=<>/{}[]'

const GLITCH_MIN_DELAY_MS = 800
const GLITCH_MAX_DELAY_MS = 2800
const GLITCH_FRAME_MS = 70
const GLITCH_MAX_CHARS = 3

export type ScrambleNode = {
  node: Text
  original: string
  chars: string[]
  ranks: number[]
  glitch: Set<number>
  overlay: HTMLSpanElement | null
}

export const collectScrambleNodes = (root: HTMLElement): ScrambleNode[] => {
  const nodes: ScrambleNode[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  while (walker.nextNode()) {
    const node = walker.currentNode as Text
    const original = node.nodeValue ?? ''
    if (!original.trim()) continue
    const chars = Array.from(original)
    nodes.push({
      node,
      original,
      chars,
      ranks: chars.map(() => Math.random()),
      glitch: new Set(),
      overlay: null,
    })
  }
  return nodes
}

const randomGlyph = () => SCRAMBLE_GLYPHS[Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)]

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min)

const restoreScramble = (entry: ScrambleNode) => {
  if (!entry.overlay) return
  entry.overlay.remove()
  entry.overlay = null
  entry.node.nodeValue = entry.original
}

export const applyScramble = (nodes: ScrambleNode[], amount: number) => {
  for (const entry of nodes) {
    if (amount <= 0 && entry.glitch.size === 0) {
      restoreScramble(entry)
      continue
    }

    if (!entry.overlay) {
      const readable = document.createElement('span')
      readable.className = 'scramble-readable'
      readable.textContent = entry.original
      const visual = document.createElement('span')
      visual.setAttribute('aria-hidden', 'true')
      entry.overlay = document.createElement('span')
      entry.overlay.className = 'scramble-text'
      entry.overlay.append(readable, visual)
      entry.node.after(entry.overlay)
      entry.node.nodeValue = ''
    }

    const fragment = document.createDocumentFragment()
    let plain = ''
    entry.chars.forEach((char, index) => {
      if (char.trim() && (entry.ranks[index] < amount || entry.glitch.has(index))) {
        if (plain) fragment.append(plain)
        plain = ''
        const glyph = document.createElement('span')
        glyph.className = 'scramble-char'
        glyph.textContent = randomGlyph()
        fragment.append(glyph)
      } else {
        plain += char
      }
    })
    if (plain) fragment.append(plain)
    entry.overlay.lastElementChild?.replaceChildren(fragment)
  }
}

const pickGlitchChars = (nodes: ScrambleNode[]) => {
  const total = nodes.reduce((sum, entry) => sum + entry.chars.length, 0)
  let target = Math.random() * total
  const entry = nodes.find((candidate) => (target -= candidate.chars.length) < 0) ?? nodes[0]

  const visible = entry.chars.flatMap((char, index) => (char.trim() ? [index] : []))
  const count = Math.min(visible.length, 1 + Math.floor(Math.random() * GLITCH_MAX_CHARS))
  for (let picked = 0; picked < count; picked += 1) {
    const [index] = visible.splice(Math.floor(Math.random() * visible.length), 1)
    entry.glitch.add(index)
  }
}

export const startGlitchLoop = (
  nodes: ScrambleNode[],
  canGlitch: () => boolean,
  render: () => void,
) => {
  let timer = 0
  let framesLeft = 0

  const clearGlitch = () => nodes.forEach((entry) => entry.glitch.clear())

  const scheduleIdle = () => {
    timer = window.setTimeout(step, randomBetween(GLITCH_MIN_DELAY_MS, GLITCH_MAX_DELAY_MS))
  }

  const step = () => {
    if (framesLeft > 0) {
      framesLeft -= 1
      if (framesLeft === 0) {
        clearGlitch()
        render()
        scheduleIdle()
        return
      }
      render()
      timer = window.setTimeout(step, GLITCH_FRAME_MS)
      return
    }

    if (nodes.length === 0 || !canGlitch()) {
      scheduleIdle()
      return
    }

    pickGlitchChars(nodes)
    framesLeft = 2 + Math.floor(Math.random() * 3)
    render()
    timer = window.setTimeout(step, GLITCH_FRAME_MS)
  }

  scheduleIdle()

  return () => {
    window.clearTimeout(timer)
    clearGlitch()
  }
}
