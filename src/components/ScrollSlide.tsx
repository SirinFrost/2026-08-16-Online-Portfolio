import {
  useLayoutEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react'
import { applyScramble, collectScrambleNodes, startGlitchLoop } from './textScramble'
import './ScrollSlide.css'

type ScrollSlideProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

const MAX_SCRAMBLE = 0.95
const READABLE_BEFORE_SETTLED = 0.15
const FULL_SCRAMBLE_RANGE = 0.3
const SCRAMBLE_TICK_MS = 120

export function ScrollSlide<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...rest
}: ScrollSlideProps<T>) {
  const Component: ElementType = as ?? 'div'
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const panel = element.closest('.scroll-panel')
    const scrambleNodes = collectScrambleNodes(element)
    let scrambleAmount = 0
    let scrambled = false
    let onScreen = false
    let frame = 0
    let ticker = 0

    const render = () => applyScramble(scrambleNodes, scrambleAmount)

    const setTicking = (on: boolean) => {
      if (on && !ticker) {
        ticker = window.setInterval(render, SCRAMBLE_TICK_MS)
      } else if (!on && ticker) {
        window.clearInterval(ticker)
        ticker = 0
      }
    }

    const stopGlitch = startGlitchLoop(
      scrambleNodes,
      () => onScreen && scrambleAmount === 0,
      render,
    )

    const getPanelOpacity = (viewportHeight: number) => {
      if (!panel) return 0
      const top = panel.getBoundingClientRect().top
      const fadeStart = viewportHeight * 0.3
      const fadeEnd = viewportHeight * 0.14
      if (top <= fadeEnd) return 1
      if (top >= fadeStart) return 0
      return 0.12 + 0.88 * ((fadeStart - top) / (fadeStart - fadeEnd)) ** 0.35
    }

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const distance = window.innerWidth * 0.3

      const enterRange = Math.max(rect.height * 0.75, viewportHeight * 0.25)
      const exitRange = Math.max(rect.height * 0.5, viewportHeight * 0.15)
      const enter = clamp01((viewportHeight - rect.top) / enterRange)
      const exit = clamp01(1 - rect.bottom / exitRange)

      const translateX = (1 - enter) ** 3 * distance - exit ** 2 * distance
      const enterOpacity = Math.max(0.12 + 0.88 * enter ** 0.5, getPanelOpacity(viewportHeight))
      const opacity = enterOpacity * (1 - exit)

      element.style.transform = `translate3d(${translateX}px, 0, 0)`
      element.style.opacity = `${opacity}`

      const unsettled = Math.max(1 - opacity, 1 - enter, exit)
      scrambleAmount =
        unsettled <= READABLE_BEFORE_SETTLED
          ? 0
          : clamp01((unsettled - READABLE_BEFORE_SETTLED) / FULL_SCRAMBLE_RANGE) ** 0.5 * MAX_SCRAMBLE
      if (scrambleAmount > 0 || scrambled) {
        render()
        scrambled = scrambleAmount > 0
      }

      onScreen = rect.bottom > 0 && rect.top < viewportHeight
      setTicking(scrambled && onScreen)
    }

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.cancelAnimationFrame(frame)
      setTicking(false)
      stopGlitch()
      applyScramble(scrambleNodes, 0)
    }
  }, [])

  return (
    <Component
      ref={ref}
      className={['scroll-slide', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Component>
  )
}
