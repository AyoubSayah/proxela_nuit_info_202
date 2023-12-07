import { chakra, BoxProps, IconProps, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
type LogoProps = {
  textColor?: string
  backgroundColor?: string
} & IconProps
const LogoSIS: FC<LogoProps> = ({
  textColor = '#fff',
  backgroundColor = 'primary.500',
  ...props
}) => {
  const Path = chakra('path')
  const ChakraPath = motion<Omit<BoxProps, 'transition'>>(Path)

  return (
    <Icon
      viewBox="0 0 220.44 209.37"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      cursor="pointer"
      {...props}
    >
      <defs></defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <ChakraPath
            fill={textColor}
            stroke={backgroundColor}
            animate={{
              rotate: '360deg',
              scale: [1, 0.9, 1.1, 1],
              transition: {
                duration: 5,
                repeat: Infinity,
              },
              transformOrigin: 'center',
            }}
            d="M214.57,122.65a16.79,16.79,0,0,1-8.09,21.58L75.22,206.84A15.34,15.34,0,0,1,54.43,199L5.87,86.72A16.79,16.79,0,0,1,14,65.14L145.22,2.53A15.35,15.35,0,0,1,166,10.32Z"
          />
          <Path
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2px"
            sx={{ fill: 'none', stroke: 'primary.500' }}
            d="M214.57,122.65a16.79,16.79,0,0,1-8.09,21.58L75.22,206.84A15.34,15.34,0,0,1,54.43,199L5.87,86.72A16.79,16.79,0,0,1,14,65.14L145.22,2.53A15.35,15.35,0,0,1,166,10.32Z"
          />
          <ChakraPath
            initial={{ transformOrigin: 'center' }}
            whileHover={{
              rotate: '-670deg',
              scale: [1, 0.7, 1],
              transition: {
                duration: 3,
              },

              transformOrigin: 'center',
            }}
            animate={{
              rotate: '-360deg',
              scale: [1, 0.7, 1],
              transition: {
                duration: 4,
                repeat: 1,
              },
              fill: 'primary.800',
              transformOrigin: 'center',
            }}
            fill={backgroundColor}
            d="M213.82,86.89a15,15,0,0,1,1.6,21.94l-85.58,93.76a17.13,17.13,0,0,1-23.17,1.69l-100-81.8a15,15,0,0,1-1.6-22L90.6,6.78a17.13,17.13,0,0,1,23.17-1.69Z"
          />
          <Path
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2px"
            sx={{ fill: 'none', stroke: 'primary.500' }}
            d="M213.82,86.89a15,15,0,0,1,1.6,21.94l-85.58,93.76a17.13,17.13,0,0,1-23.17,1.69l-100-81.8a15,15,0,0,1-1.6-22L90.6,6.78a17.13,17.13,0,0,1,23.17-1.69Z"
          />
          <Path
            className="cls-1"
            fill={textColor}
            d="M76.07,119.79a36.62,36.62,0,0,1-6.43-.56,27.48,27.48,0,0,1-5.58-1.57l1-7.39a37.09,37.09,0,0,0,6,2,24.9,24.9,0,0,0,5.48.68,8.12,8.12,0,0,0,4.49-1,3.37,3.37,0,0,0,1.56-3c0-1.7-1.07-3-3.2-4l-5.58-2.7a17.55,17.55,0,0,1-6.4-5,10.64,10.64,0,0,1-2.27-6.59,9.63,9.63,0,0,1,3.37-7.87q3.36-2.79,9.51-2.79a18.49,18.49,0,0,1,6.8,1.26,17.26,17.26,0,0,1,5.7,3.63l-5,5.72a16,16,0,0,0-3.8-2.78,8.14,8.14,0,0,0-3.69-1,6,6,0,0,0-3.75,1,3.51,3.51,0,0,0-1.34,3,3.8,3.8,0,0,0,1,2.44,8.49,8.49,0,0,0,2.69,2.07l5.25,2.71a19,19,0,0,1,6.33,5,9.73,9.73,0,0,1,2.23,6.1,9.4,9.4,0,0,1-3.72,8Q82.93,119.8,76.07,119.79Z"
          />
          <Path
            className="cls-1"
            fill={textColor}
            d="M97.94,86.9V80.41H122.5V86.9Zm0,32.34v-6.51H122.5v6.51Zm8.64,0V80.41h7.22v38.83Z"
          />
          <path
            className="cls-1"
            fill={textColor}
            d="M141.69,119.79a36.51,36.51,0,0,1-6.42-.56,27.48,27.48,0,0,1-5.58-1.57l1-7.39a37.52,37.52,0,0,0,6,2,24.76,24.76,0,0,0,5.48.68,8.09,8.09,0,0,0,4.48-1,3.37,3.37,0,0,0,1.56-3c0-1.7-1.06-3-3.2-4l-5.58-2.7a17.51,17.51,0,0,1-6.39-5,10.58,10.58,0,0,1-2.27-6.59,9.65,9.65,0,0,1,3.36-7.87q3.36-2.79,9.52-2.79a18.44,18.44,0,0,1,6.79,1.26,17.26,17.26,0,0,1,5.7,3.63l-5,5.72a16,16,0,0,0-3.81-2.78,8.07,8.07,0,0,0-3.69-1,6,6,0,0,0-3.74,1,3.48,3.48,0,0,0-1.34,3,3.79,3.79,0,0,0,.94,2.44,8.72,8.72,0,0,0,2.69,2.07l5.25,2.71a18.84,18.84,0,0,1,6.33,5A9.67,9.67,0,0,1,156,109a9.4,9.4,0,0,1-3.72,8Q148.55,119.8,141.69,119.79Z"
          />
        </g>
      </g>
    </Icon>
  )
}

export default LogoSIS

{
  /* <style>.cls-1{fill:#fff;}
.cls-2{fill:none;stroke:#35bfc5;stroke-miterlimit:10;stroke-width:2px;}
.cls-3{fill:#35bfc5;}</style> */
}
