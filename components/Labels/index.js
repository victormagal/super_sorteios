import { Container } from '../grid';
import { Button } from './styles';

export default function Labels() {
  return (
    <Container className='mt-12'>
      <Button bgColor='#FDFFFC' tintColor='333333' borderColor='#A9A9A9'>Disponíveis</Button>
      <Button bgColor='#FF9F1C' tintColor='black' borderColor='transparent'>Reservados</Button>
      <Button bgColor='#00A676' tintColor='black' borderColor='transparent'>Pagos</Button>
    </Container>
  );
}
