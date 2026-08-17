import { useEffect, useRef } from 'react'
import './CodingBackground.css'

const CODE_CHARS =
  '01{}[]();=<>/\\|&+-*#@_def if return class import async await const let fn main git npm vite react python java true false null =>'

type ThemeColors = {
  grid: string
  head: string
  trail: string
}

type Column = {
  x: number
  y: number
  speed: number
  chars: string[]
  length: number
}

function getThemeColors(): ThemeColors {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'

  if (isDark) {
    return {
      grid: 'rgba(100, 149, 237, 0.035)',
      head: 'rgba(120, 180, 255, 1)',
      trail: 'rgba(80, 140, 220, 0.58)',
    }
  }

  return {
    grid: 'rgba(220, 80, 80, 0.06)',
    head: 'rgba(180, 40, 40, 0.9)',
    trail: 'rgba(220, 70, 70, 0.55)',
  }
}

function pickChar() {
  return CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]
}

function createColumns(width: number, height: number, columnWidth: number) {
  const count = Math.ceil(width / columnWidth) + 1

  return Array.from({ length: count }, (_, index) => {
    const length = 10 + Math.floor(Math.random() * 18)

    return {
      x: index * columnWidth,
      y: Math.random() * height,
      speed: 0.35 + Math.random() * 1.1,
      length,
      chars: Array.from({ length }, pickChar),
    } satisfies Column
  })
}

export function CodingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fontFamily = '"JetBrains Mono", "Consolas", "Courier New", monospace'
    const fontSize = 14
    const columnWidth = 24
    const lineHeight = 20

    let animationId = 0
    let width = 0
    let height = 0
    let dpr = 1
    let gridOffset = 0
    let columns: Column[] = []

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = createColumns(width, height, columnWidth)
    }

    const drawGrid = (colors: ThemeColors) => {
      const spacing = 56
      ctx.strokeStyle = colors.grid
      ctx.lineWidth = 1
      const offset = gridOffset % spacing

      for (let x = -spacing; x < width + spacing; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x + offset, 0)
        ctx.lineTo(x + offset, height)
        ctx.stroke()
      }

      for (let y = -spacing; y < height + spacing; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y + offset * 0.65)
        ctx.lineTo(width, y + offset * 0.65)
        ctx.stroke()
      }
    }

    const drawColumns = (colors: ThemeColors) => {
      ctx.font = `500 ${fontSize}px ${fontFamily}`
      ctx.textBaseline = 'top'

      for (const column of columns) {
        if (!prefersReducedMotion) {
          column.y += column.speed

          if (column.y - column.length * lineHeight > height) {
            column.y = -Math.random() * height * 0.35
            column.speed = 0.35 + Math.random() * 1.1
            column.length = 10 + Math.floor(Math.random() * 18)
            column.chars = Array.from({ length: column.length }, pickChar)
          }

          if (Math.random() < 0.04) {
            column.chars[0] = pickChar()
          }
        }

        for (let index = 0; index < column.chars.length; index += 1) {
          const charY = column.y - index * lineHeight
          if (charY < -lineHeight || charY > height + lineHeight) continue

          const fade = Math.max(0, 1 - index / column.length)
          const alpha = index === 0 ? 1 : fade * fade

          ctx.fillStyle = index === 0 ? colors.head : colors.trail
          ctx.globalAlpha = alpha * (index === 0 ? 1 : 0.85)
          ctx.fillText(column.chars[index], column.x, charY)
        }
      }

      ctx.globalAlpha = 1
    }

    const draw = () => {
      const colors = getThemeColors()

      ctx.clearRect(0, 0, width, height)
      drawGrid(colors)
      drawColumns(colors)

      if (!prefersReducedMotion) {
        gridOffset += 0.12
        animationId = requestAnimationFrame(draw)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    animationId = requestAnimationFrame(draw)

    const themeObserver = new MutationObserver(() => {
      if (prefersReducedMotion) {
        cancelAnimationFrame(animationId)
        animationId = requestAnimationFrame(draw)
      }
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      themeObserver.disconnect()
    }
  }, [])

  return (
    <div className="coding-background" aria-hidden="true">
      <canvas ref={canvasRef} className="coding-background__canvas" />
      <div className="coding-background__fade" />
    </div>
  )
}
