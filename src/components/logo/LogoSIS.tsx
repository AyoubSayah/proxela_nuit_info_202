import { chakra, BoxProps, IconProps, Icon, Img, ImgProps } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import logo from '../../../public/logoFall.png'
type LogoProps = {
  textColor?: string
  backgroundColor?: string
} & ImgProps
const LogoSIS: FC<LogoProps> = ({
  textColor = '#fff',
  backgroundColor = 'primary.500',
  ...props
}) => {
  const Path = chakra('path')

  return (
  
       <Img src={logo}        {...props}/>

  )
}

export default LogoSIS

{
  /* <style>.cls-1{fill:#fff;}
.cls-2{fill:none;stroke:#35bfc5;stroke-miterlimit:10;stroke-width:2px;}
.cls-3{fill:#35bfc5;}</style> */
}
