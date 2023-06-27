import { Container } from 'react-bootstrap'

import Prices from '../components/Prices'

const Planes = () => {
  return (
    <Container className='pt-5'>
      <h1 className='mb-4'>Tenemos planes especiales para ti y su mascota</h1>
      <Prices />
    </Container>
  )
}

export default Planes
