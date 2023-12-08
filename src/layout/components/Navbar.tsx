import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Img,
  keyframes,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from '@chakra-ui/react'
import { FunctionComponent, memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineUser, AiOutlineLogout, AiOutlineBell } from 'react-icons/ai'

import { Link, NavLink } from 'react-router-dom'

import Logo from '../../components/logo/Logo'
import bottomNavbarImage from '../../assets/landing/navbar.png'
import { useDispatch, useSelector } from 'react-redux'
import { authSlice, selectToken } from '../../modules/auth/slices/authSlice'
import LogoSIS from '../../components/logo/LogoSIS'
type NavbarProps = {
  toggleSideBar?: () => void
  sideBarWidth?: number
}

const Navbar: FunctionComponent<NavbarProps> = ({
  toggleSideBar,
  sideBarWidth,
}) => {
  const { t, i18n } = useTranslation()
  const [isSticky, setIsSticky] = useState(false)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()
  const handleLanguageChange = (e: any) => {
    void i18n.changeLanguage(e.target.value)
  }
  const animationKeyframes = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
    }`
  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
  }, [])
  return (
    <Box
      position={isSticky ? 'fixed' : 'relative'}
      top={0}
      left={0}
      w="100%"
      h="6rem"
      animation={isSticky ? `${animationKeyframes} 0.5s ease-in-out` : ''}
      py="1rem"
      zIndex="80"
      background="white"
      boxShadow={isSticky ? 'md' : ''}
    >
      <Flex
        alignItems="center"
        justifyContent={'space-between'}
        right="0"
        top="0"
        px="1rem"
        w="100%"
      >
        <Flex alignItems="center">
          <LogoSIS h="5rem" w="5rem" />
        </Flex>
        {token === '' && (
          <Flex
            alignItems="center"
            bg="white"
            fontSize="1.1rem"
            fontWeight="thin"
            gap="1rem"
            justifyContent="center"
            p=".5rem"
            w="100%"
            whiteSpace="nowrap"
          >
            <NavLink to={'/'}>
              {({ isActive }) => (
                <Text
                  color={isActive ? 'primary.500' : 'black'}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Accueil
                </Text>
              )}
            </NavLink>
            <NavLink to={'/contactus'}>
              {({ isActive }) => (
                <Text
                  color={isActive ? 'primary.500' : 'black'}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Contact
                </Text>
              )}
            </NavLink>
            {/*    <NavLink to={'/services'}>
              {({ isActive }) => (
                <Text
                  color={isActive ? 'primary.500' : 'black'}
                  fontSize="lg"
                  fontWeight="bold"
                >
                  Services
                </Text>
              )}
            </NavLink> */}
          </Flex>
        )}
        {token == null && (
          <Flex alignItems="center" gap="1rem" ml="auto">
            <Link to="/auth/login">
              <Button
                _hover={{
                  background: 'primary.600',
                }}
                background="primary.500"
                color="white"
                rounded="full"
                size="lg"
                // py="1.3rem"
                fontWeight="bold"
              >
                Login
              </Button>
            </Link>
            {/* <Select
            bg="white"
            w="6.5rem"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value={'en'}>English</option>
            <option value={'fr'}>French</option>
          </Select> */}
          </Flex>
        )}
        {token && (
          <Flex gap=".5rem">
            <Menu>
              <MenuButton
                color="white"
                bg="primary.400"
                as={IconButton}
                rounded="full"
                w="3rem"
                h="3rem"
                icon={<AiOutlineBell />}
                _hover={{
                  background: 'primary.600',
                }}
                _focus={{
                  background: 'primary.600',
                }}
                _active={{
                  background: 'primary.600',
                }}
              />

              <MenuList>
                <MenuItem>
                  <Icon as={AiOutlineUser} mr=".5rem" /> Profile
                </MenuItem>
                <MenuItem>
                  <Icon as={AiOutlineLogout} mr=".5rem" /> Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton>
                <Avatar name="ayoub" ml="auto" />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Icon as={AiOutlineUser} mr=".5rem" /> Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    console.log('clicked')
                    dispatch(authSlice.actions.signOut())
                  }}
                >
                  <Icon as={AiOutlineLogout} mr=".5rem" /> Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
      <Img
        height="5rem"
        mt="-2rem"
        position="relative"
        src={bottomNavbarImage}
        width="100%"
        zIndex="-1"
      />
    </Box>
  )
}

export default memo(Navbar)
