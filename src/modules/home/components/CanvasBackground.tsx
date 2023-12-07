import { chakra, ImageProps, list } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { colors as themeColors } from '../../../theme/colors'

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
  const colors = [...Object.values(themeColors['primary'])]

  useEffect(() => {
    intitiateCtx()
    return () => {}
  }, [])

  const intitiateCtx = () => {
    const canvas = canvasRef.current

    if (!canvas) return
    setCtx(canvas?.getContext('2d'))
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  useEffect(() => {
    if (ctx) {
      draw()
      window.addEventListener('resize', function () {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
        draw()
      })
    }
  }, [ctx])

  const draw = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'
    for (let y = 0; y < canvasRef.current.height; y += 14) {
      for (let x = 0; x < canvasRef.current.width; x += 15) {
        ctx.strokeStyle = colors[2]

        ctx.beginPath()
        ctx.moveTo(x, y)
        const angle = Math.cos(x) + Math.sin(y)
        ctx.lineTo(x + angle * 100, y + angle * 100)
        ctx.stroke()
      }
    }
  }

  return (
    <canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 9,
      }}
      ref={canvasRef}
    />
  )
}

export default React.memo(CanvasBackground)
