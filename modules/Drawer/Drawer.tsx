import { IconClose, IconHamburger } from 'components/Icons'
import dynamic from 'next/dynamic'
import { useCallback, useState } from 'react'
import { Backdrop, MenuIcon } from './styles'

const DynamicMenu = dynamic(() => import('./components/Menu'))

const Drawer = () => {
  const [isOpen, toggle] = useState(false)
  const toggleDrawer = useCallback(() => {
    toggle(isOpen => !isOpen)
  }, [])
  return (
    <>
      <DynamicMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <MenuIcon onClick={toggleDrawer}>
        <IconHamburger show={!isOpen} color="dark" />
        <IconClose show={isOpen} />
      </MenuIcon>
      <Backdrop isOpen={isOpen} onClick={toggleDrawer} />
    </>
  )
}

export default Drawer
