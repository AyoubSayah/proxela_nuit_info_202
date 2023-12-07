import React, {  useLayoutEffect, useRef, useState } from 'react'
import { colors as themeColors } from '../../../theme/colors'

interface Particle {
  x: number
  y: number
  id?: number
  radius: number
  color: string
  speedX: number
  speedY: number
}
const Canvas = ({ ElementRef }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>()
  const animationFunction = useRef({ fn: 0 })

  useLayoutEffect(() => {
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
  useLayoutEffect(() => {
    let mouseListener
    let mouseClick
    const listOfParticles = []
    const mouseEvent = (e) => {
      const colors = [...Object.values(themeColors['primary'])]
    
        const newParticle = {
          x: e.x,
          y: e.y,
          radius: Math.random() * 11 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedY: Math.random() * 1 - 0.5,
          speedX: Math.random() * 1 - 0.5,
        }
        listOfParticles.push(newParticle)
      
    }
    if (ElementRef && ElementRef.current) {
      mouseListener = ElementRef.current.addEventListener(
        'mousemove',
        mouseEvent
      )
      mouseClick = ElementRef.current.addEventListener('click', mouseEvent)
    }

    if (ctx) {
      animate(listOfParticles)
    }

    return () => {
      if (mouseListener)
        mouseListener?.removeEventListener('mousemove', mouseEvent)
      if (mouseClick) mouseClick?.removeEventListener('click', mouseEvent)
      cancelAnimationFrame(animationFunction.current.fn)
    }
  }, [ElementRef, ctx])

  const update = (particle: Particle) => {
    particle.x += particle.speedX
    particle.y += particle.speedY
    if (particle.radius > 0.1) particle.radius = particle.radius - 0.1
    return particle
  }
  const draw = (prticle: Particle) => {
    ctx.fillStyle = prticle.color
    ctx.beginPath()
    ctx.arc(prticle.x, prticle.y, prticle.radius, 0, Math.PI * 2)
    ctx.fill()
  }
  window.addEventListener('resize', function () {
    canvasRef.current.width = window.innerWidth
    canvasRef.current.height = window.innerHeight
  })
  const animate = (listOfParticles: Particle[]) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    // ctx.fillStyle = 'rgba(255,255,255,0.4)'
    // ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    for (let i = 0; i < listOfParticles.length; i++) {

      listOfParticles[i] = update(listOfParticles[i])

      draw(listOfParticles[i])

      for (let j = i; j < listOfParticles.length; j++) {
        const dx = listOfParticles[i].x - listOfParticles[j].x
        const dy = listOfParticles[i].y - listOfParticles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          ctx.beginPath()
          ctx.strokeStyle = listOfParticles[i].color
          ctx.lineWidth = 0.2
          ctx.moveTo(listOfParticles[i].x, listOfParticles[i].y)
          ctx.lineTo(listOfParticles[j].x, listOfParticles[j].y)
          ctx.stroke()
        }
      }
      if (listOfParticles[i].radius < 0.2) {
        listOfParticles.splice(i, 1)
        i--
      }
    }
    animationFunction.current.fn= requestAnimationFrame(() => {
      animate(listOfParticles)
    })
  }

  return (
    <canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 999,
      }}
      ref={canvasRef}
    />
  )
}

export default Canvas
