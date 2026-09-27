import { useEffect, type RefObject } from 'react'
import { applyScramble, collectScrambleNodes, startGlitchLoop } from '../components/textScramble'

export function useTextGlitch(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = collectScrambleNodes(element)
    const isOnScreen = () => {
      const rect = element.getBoundingClientRect()
      return rect.bottom > 0 && rect.top < window.innerHeight
    }
    const stop = startGlitchLoop(nodes, isOnScreen, () => applyScramble(nodes, 0))

    return () => {
      stop()
      applyScramble(nodes, 0)
    }
  }, [ref])
}
