import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react'
import './ScrollPanel.css'

type ScrollPanelProps<T extends ElementType = 'section'> = {
  as?: T
  children: ReactNode
  className?: string
  drift?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'drift'>

export function ScrollPanel<T extends ElementType = 'section'>({
  as,
  children,
  className = '',
  drift = true,
  ...rest
}: ScrollPanelProps<T>) {
  const Component = as ?? 'section'
  const panelRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panel = panelRef.current
    const inner = innerRef.current
    if (!drift || !panel || !inner) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = panel.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const fadeStart = viewportHeight * 0.3
      const fadeEnd = viewportHeight * 0.14

      let opacity = 1
      if (rect.top <= fadeEnd) {
        opacity = 1
      } else if (rect.top >= fadeStart) {
        opacity = 0.12
      } else {
        const progress = (fadeStart - rect.top) / (fadeStart - fadeEnd)
        opacity = 0.12 + 0.88 * progress ** 0.35
      }

      const offset = rect.top + rect.height * 0.5 - viewportHeight * 0.5
      inner.style.transform = `translate3d(0, ${offset * 0.3}px, 0)`
      inner.style.opacity = `${opacity}`
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
    }
  }, [drift])

  return (
    <Component
      ref={panelRef}
      className={['scroll-panel', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div ref={innerRef} className="scroll-panel__inner">
        {children}
      </div>
    </Component>
  )
}
