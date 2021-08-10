import { Container } from '../grid';
import { Background } from './styles';

export default function Footer() {
  return (
    <Background className='mt-12'>
      <Container className='py-4 items-center'>
        <div className='col-span-8'>
          <h1 className='font-bold text-white'>Sorteio regulamentado pela Lei Federal Nº 13.019/14 Art. 84B e 84C</h1>
        </div>
        <div className='col-span-4 flex justify-end'>
          <a className='bg-white font-bold px-12 py-2 rounded' href='https://www.in.gov.br/en/web/dou/-/resolucao-n-384-de-9-de-junho-de-2020-261041184?inheritRedirect=true&redirect=%2Fconsulta%3Fq%3Dcomiss%26start%3D112%26publish%3Dpast-month%26delta%3D3' title='Regulamento' target='_blank' rel='noreferrer'>Regulamento</a>
        </div>
      </Container>
    </Background>
  );
}
