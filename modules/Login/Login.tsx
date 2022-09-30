import Button from 'components/Button'
import Container from 'components/Container'
import Typography from 'components/Typography'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl } from 'react-intl'
import { Form, Input, StyledLogin } from './styles'

const Login = ({ handleSubmit }) => {
  const intl = useIntl()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    if (username && password) {
      handleSubmit({ username, password })
    }
  }
  return (
    <Container backgroundColor="primary" minHeight={true}>
      <StyledLogin>
        <Typography variant="h1">
          <FormattedMessage id={'client.login'} />
        </Typography>
        <Form>
          <Input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder={intl.formatMessage({ id: 'client.username' })}
          />
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder={intl.formatMessage({ id: 'client.password' })}
          />
          <Button handleClick={handleLogin} style={{ marginTop: '24px' }}>
            <FormattedMessage id={'client.login'} />
          </Button>
        </Form>
      </StyledLogin>
    </Container>
  )
}

export default Login
