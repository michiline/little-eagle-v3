import Client from 'modules/Client'
import Login from 'modules/Login'
import useAuth, { HomeRoute } from '../contexts/auth'

const LoginPage = () => {
  const { login, isAuthenticated, images, url } = useAuth()
  if (!isAuthenticated) {
    return <Login handleSubmit={login} />
  }
  return <Client images={images} url={url} />
}

export default HomeRoute(LoginPage)
