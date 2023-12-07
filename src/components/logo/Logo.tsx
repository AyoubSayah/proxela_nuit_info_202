import { Icon, chakra, IconProps, BoxProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC } from 'react'

type LogoProps = {
  textColor?: string
  backgroundColor?: string
} & IconProps
const Path = chakra('path')
const ChakraPath = motion<Omit<BoxProps, 'transition'>>(Path)

const Logo: FC<LogoProps> = ({
  textColor = '#fff',
  backgroundColor = 'primary.500',
  ...props
}) => {
  return (
    <Icon
      viewBox="0 0 220.44 209.37"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      cursor="pointer"
      {...props}
    >
      <g data-name="Layer 2" id="Layer_2">
        <g data-name="Layer 1" id="Layer_1-2">
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
            stroke={backgroundColor}
            strokeMiterlimit="10"
            strokeWidth="2px"
            d="M213.82,86.89a15,15,0,0,1,1.6,21.94l-85.58,93.76a17.13,17.13,0,0,1-23.17,1.69l-100-81.8a15,15,0,0,1-1.6-22L90.6,6.78a17.13,17.13,0,0,1,23.17-1.69Z"
          />
          <Path
            fill={textColor}
            d="M96,74.32h9.1V122.6H96Zm4.15,20.79h15.44a5.44,5.44,0,0,0,2.87-.75,5.11,5.11,0,0,0,1.95-2.11,6.76,6.76,0,0,0,.69-3.12,7,7,0,0,0-.68-3.17,4.94,4.94,0,0,0-1.92-2.12,5.53,5.53,0,0,0-2.91-.75H100.12V74.32h15.21a16.55,16.55,0,0,1,8,1.85,13.12,13.12,0,0,1,5.33,5.19,16.9,16.9,0,0,1,0,15.53,13.05,13.05,0,0,1-5.33,5.16,16.66,16.66,0,0,1-8,1.83H100.12Z"
          />
        </g>
      </g>
    </Icon>
  )
}
export default Logo
