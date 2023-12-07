import { useAnimation } from 'framer-motion'
import { Ref, useEffect, useRef, useState } from 'react'

const UseInView = () => {
  const ref = useRef<any>()
  const controls = useAnimation()

  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        if (intersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      })
    })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ref?.current) {
      observer.observe(ref.current)
    }
  }, [ref.current])
  useEffect(() => {
    if (inView) {
      animateUp()
    }
  }, [inView])

  const animateUp = () => {
    void controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    })
  }
  // const animateDown = () => {
  //   void controls.start({
  //     opacity: 1,
  //     y: 400,
  //     transition: {
  //       duration: 1.5,
  //       ease: 'easeOut',
  //     },
  //   })
  // }
  return { ref, inView, controls }
}

export default UseInView
