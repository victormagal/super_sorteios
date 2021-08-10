/* eslint-disable @next/next/no-img-element */
import { Container } from '../grid';
import { Background } from './styles';

export default function Header() {
  return (
    <Background>
      <Container className='items-center'>
        <div className='lg:col-span-7 col-span-4'>
          <img src='/logo.png' alt='Super Sorteios' />
        </div>
        <div className='lg:col-span-5 col-span-4 lg:pb-0 pb-24'>
          <img src='/iphone.png' alt='iPhone 12 128GB' />
        </div>
      </Container>
    </Background>
  );
}
