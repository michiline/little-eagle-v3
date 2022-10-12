import React, { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { loginRequest, checkSessionRequest, logoutRequest, registerRequest } from '../utils/api'

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  setAuthenticated: () => {},
  login: () => {},
  logout: () => {},
  images: [],
  url: '',
})

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [images, setImages] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await checkSessionRequest()
        if (response.ok) {
          const { username, images, url } = await response.json()
          setAuthenticated(true)
          setLoading(false)
          setUsername(username)
          setImages(images)
          setUrl(url)
        } else {
          setAuthenticated(false)
          setLoading(false)
        }
      } catch (err) {
        setAuthenticated(false)
        setLoading(false)
      }
    }
    initializeAuth()
  }, [])

  const login = async ({ username, password }) => {
    const response = await loginRequest({ username, password })
    if (response.ok) {
      const { username, images, url } = await response.json()
      setAuthenticated(true)
      setLoading(false)
      setUsername(username)
      setImages(images)
      setUrl(url)
    } else {
      setAuthenticated(false)
      setLoading(false)
    }
  }

  const register = async ({ username, password }) => {
    const response = await registerRequest({ username, password })
    if (response.ok) {
      const { username } = await response.json()
      setAuthenticated(true)
      setLoading(false)
      setUsername(username)
      Router.push('/')
    } else {
      setAuthenticated(false)
      setLoading(false)
    }
  }

  const logout = async () => {
    const response = await logoutRequest()
    if (response.ok) {
      setAuthenticated(false)
      setLoading(false)
      setUsername('')
      setImages([])
      setUrl('')
      Router.push('/client')
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, username, images, url, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const ProtectRoute = Component => {
  return () => {
    const { isLoading, isAuthenticated } = useAuth()
    const router = useRouter()
    if (!isAuthenticated && !isLoading) {
      router.push('/client')
    }
    if (isLoading) {
      return <div>Loading...</div>
    }
    return <Component {...arguments} />
  }
}

export const RedirectRoute = Component => {
  return () => {
    const { isLoading, isAuthenticated } = useAuth()
    const router = useRouter()

    if (isAuthenticated && !isLoading) {
      router.push('/')
    }
    if (isLoading) {
      return <div>Loading...</div>
    }
    return <Component {...arguments} />
  }
}

export const HomeRoute = Component => {
  return () => {
    const { isLoading } = useAuth()

    if (isLoading) {
      return <div>Loading...</div>
    }
    return <Component {...arguments} />
  }
}

export default useAuth
