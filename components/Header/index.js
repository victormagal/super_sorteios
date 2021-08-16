/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Container } from '../grid';
import { Background } from './styles';

export default function Header() {
  return (
    <Background>
      <Container>
        <ul className='col-span-4 lg:col-span-12 flex justify-center lg:justify-end py-4'>
          <li>
            <a href='https://www.facebook.com/Super-Sorteios-101031618962968' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon 
                icon={faFacebook}
                color='white'
                width='30px'
                height='30px'
              />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/supersorteios_brasil/' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon 
                className='ml-2' 
                icon={faInstagram}
                color='white'
                width='30px'
                height='30px'
              />
            </a>
          </li>
          <li>
            <a href='https://api.whatsapp.com/send?phone=5561996108176' target='_blank' rel='noreferrer'>
              <FontAwesomeIcon
                className='ml-2' 
                icon={faWhatsapp}
                color='white'
                width='30px'
                height='30px'
              />
            </a>
          </li>
        </ul>
      </Container>
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
