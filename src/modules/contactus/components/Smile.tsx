import { chakra } from '@chakra-ui/react'
import React from 'react'

const Smile = () => {
  const Circle = chakra('circle')
  const Ellipse = chakra('ellipse')

  return (
    <svg width="100%" height="100%" viewBox="50 0 500 400">
      <defs>
        <clipPath id="tongue">
          <rect x="220" y="220" width="160" height="60" />
        </clipPath>
      </defs>

      <style type="text/css"></style>

      <Circle cx="300" cy="200" r="200" fill="yellow" />

      <rect x="220" y="215" width="150" height="5" />

      <g style={{ clipPath: 'url(#tongue)' }}>
        <Ellipse cx="300" cy="220" rx="30" ry="60" fill="red" className="a3" />
      </g>

      <Circle cx="210" cy="100" r="45" fill="white" />
      <Circle cx="400" cy="100" r="45" fill="white" />
      <Circle cx="385" cy="100" r="25" fill="black" className="right" />
      <Circle cx="225" cy="100" r="25" fill="black" className="left" />
    </svg>
  )
}

export default Smile
