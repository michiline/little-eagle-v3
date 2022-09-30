import Container from 'components/Container'
import { useEffect } from 'react'
import styled from 'styled-components'
import useAuth, { ProtectRoute } from '../contexts/auth'

const LogoutPage = () => {
  const { isAuthenticated, logout } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      logout()
    }
  }, [isAuthenticated, logout])
  return (
    <Container backgroundColor="primary" minHeight={true}>
      Loggin out...
    </Container>
  )
}

export default ProtectRoute(LogoutPage)
