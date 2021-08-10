import { Container } from '../grid';
import { Background, Description, Step, Subtitle, Title } from './styles';
import { CreditCardIcon, CurrencyDollarIcon, TicketIcon } from '@heroicons/react/outline'

export default function Tutorial() {
  return (
    <Background>
      <Container>
        <Title>Como funciona</Title>
        <Step>
          <TicketIcon width={100} height={100} className='text-white' />
          <Subtitle>Escolha seus números</Subtitle>
          <Description>Selecione quantos números desejar e faça sua reserva pelo nosso formulário de contato.</Description>
        </Step>
        <Step>
          <CreditCardIcon width={100} height={100} className='text-white' />
          <Subtitle>Reserva/Pagamento</Subtitle>
          <Description>Após efetuar sua reserva, entraremos em contato. Confirme a forma de pagamento (PicPay ou PIX) que preferir.</Description>
        </Step>
        <Step>
          <CurrencyDollarIcon width={100} height={100} className='text-white' />
          <Subtitle>Pronto!</Subtitle>
          <Description>Com seu(s) número(s) em mãos, aguarde o sorteio e boa sorte!</Description>
        </Step>
      </Container>
    </Background>
  );
}
