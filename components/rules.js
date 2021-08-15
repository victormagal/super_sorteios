import { Container } from "./grid";

export default function Rules() {
  return (
    <Container>
      <h1 className='lg:col-span-8 col-span-4 lg:col-start-3 text-4xl lg:px-0 px-4'>Regulamento</h1>
      <ul className='lg:col-span-8 col-span-4 lg:col-start-3 ml-5 lg:px-0 px-4'>
        <li className='text-xl mb-2 list-disc'>O sorteio acontecerá após a venda de todas as 1.000 cotas.</li>
        <li className='text-xl mb-2 list-disc'>As reservas terão prazo máximo de 48 horas, após esse período, caso o pagamento não seja efetuado, a cota ficará disponível novamente.</li>
        <li className='text-xl mb-2 list-disc'>Será considerado os 3 últimos números do 1º prêmio da Loteria Federal</li>
        <li className='text-xl mb-2 list-disc'>Os sorteios da Loteria Federal acontecem as quartas-feiras e sábados às 19h30.</li>
        <li className='text-xl list-disc'>Sorteio realizado com base no resultado da Loteria Federal, forma mais segura e sem chances de fraude.</li>
      </ul>
    </Container>
  );
}
