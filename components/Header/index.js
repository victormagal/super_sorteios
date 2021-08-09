/* eslint-disable @next/next/no-img-element */
import { Container } from '../grid';
import { Background } from './styles';

export default function Header() {
  return (
    <Background>
      <Container className='items-center'>
        <div className='col-span-6'>
          <img src='/logo.png' alt='Super Sorteios' />
        </div>
        <div className='col-span-6'>
          <img src='/iphone.png' alt='iPhone 12 128GB' />
        </div>
      </Container>
    </Background>
  );
}
