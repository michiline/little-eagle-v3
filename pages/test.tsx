import styled from 'styled-components'
import Container from 'components/Container'
import Image from 'next/image'

const TestPage = () => {
  return (
    <Container backgroundColor="primary" minHeight={true} style={{ flexDirection: 'column' }}>
      <ImageContainer>
        <SimpleImage
          src="https://littleeaglephoto.s3.eu-central-1.amazonaws.com/client/matea/img9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIARVVA5HK533DTHQSS%2F20221013%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20221013T114405Z&X-Amz-Expires=604800&X-Amz-Signature=699cb08767726b14c8d28998fbe840d815090ff903ab79d7f14bd42a8bdde75f&X-Amz-SignedHeaders=host&x-id=GetObject"
          alt=""
        />
      </ImageContainer>
      <ImageContainer>
        <NextImage
          src="https://littleeaglephoto.s3.eu-central-1.amazonaws.com/client/matea/img9.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIARVVA5HK533DTHQSS%2F20221013%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20221013T114405Z&X-Amz-Expires=604800&X-Amz-Signature=699cb08767726b14c8d28998fbe840d815090ff903ab79d7f14bd42a8bdde75f&X-Amz-SignedHeaders=host&x-id=GetObject"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
    </Container>
  )
}

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  aspect-ratio: 3/2;
`

const SimpleImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const NextImage = styled(Image)``

export default TestPage
