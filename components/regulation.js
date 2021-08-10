import { Container } from "./grid";

export default function Regulation() {
  return (
    <Container>
      <h1 className='col-span-8 col-start-3 text-4xl'>Regulamento</h1>
      <ul className='col-span-8 col-start-3 ml-5'>
        <li className='text-xl mb-2 list-disc'>O sorteio acontecerá após a venda de todos os 1.000 números.</li>
        <li className='text-xl mb-2 list-disc'>Será considerado os 3 últimos números do 1º prêmio da Loteria Federal</li>
        <li className='text-xl mb-2 list-disc'>Os sorteios da Loteria Federal acontecem as quartas-feiras e sábados às 19h30.</li>
        <li className='text-xl list-disc'>Sorteio realizado com base no resultado da Loteria Federal, forma mais segura e sem chances de fraude.</li>
      </ul>
    </Container>
  );
}
