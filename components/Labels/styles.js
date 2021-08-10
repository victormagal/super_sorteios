import styled from 'styled-components';

export const Button = styled.button.attrs({
  className: 'col-span-4 cursor-auto font-semibold mx-8 py-2 rounded text-xl'
})`
  background-color: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.tintColor};
`;
