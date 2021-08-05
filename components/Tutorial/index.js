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
          <Description>Escolha seus números da sorte. Você pode escolher quantos desejar.</Description>
        </Step>
        <Step>
          <CreditCardIcon width={100} height={100} className='text-white' />
          <Subtitle>Faça o pagamento</Subtitle>
          <Description>Escolha uma forma de pagamento.</Description>
        </Step>
        <Step>
          <CurrencyDollarIcon width={100} height={100} className='text-white' />
          <Subtitle>Pronto!</Subtitle>
          <Description>Aguarde a confirmação de seu número e boa sorte!</Description>
        </Step>
      </Container>
    </Background>
  );
}
