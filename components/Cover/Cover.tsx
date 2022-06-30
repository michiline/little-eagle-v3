import { Container } from './styles'

interface Props {
  imgUrl: string
}

const Cover = ({ imgUrl }: Props) => {
  return <Container imgUrl={imgUrl} />
}

export default Cover
