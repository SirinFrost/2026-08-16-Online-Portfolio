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
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export function ScrollPanel<T extends ElementType = 'section'>({
  as,
  children,
  className = '',
  ...rest
}: ScrollPanelProps<T>) {
  const Component = as ?? 'section'
  const panelRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panel = panelRef.current
    const inner = innerRef.current
    if (!panel || !inner) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = panel.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const panelCenter = rect.top + rect.height * 0.5
      const viewportCenter = viewportHeight * 0.5
      const offset = panelCenter - viewportCenter
      const fadeStart = viewportHeight * 0.3
      const fadeEnd = viewportHeight * 0.14

      const translateY = offset * 0.3

      let opacity = 1
      if (rect.top <= fadeEnd) {
        opacity = 1
      } else if (rect.top >= fadeStart) {
        opacity = 0.12
      } else {
        const progress = (fadeStart - rect.top) / (fadeStart - fadeEnd)
        opacity = 0.12 + 0.88 * progress ** 0.35
      }

      inner.style.transform = `translate3d(0, ${translateY}px, 0)`
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
  }, [])

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
