import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    background-color: #E85F5C;
  }
  input[type=text] {
    border: 1px solid #A9A9A9;
    color: #333333;
  }
  li {
    span {
      &.available {
        background-color: #FDFFFC;
        border: 1px solid #A9A9A9;
        color: #333333;
      }
      &.reserved {
        background-color: #FF9F1C;
        color: black;
      }
      &.paid {
        background-color: #00A676;
        color: black;
      }
    }
    &:hover {
      span {
        background-color: #333333 !important;
        color: #FDFFFC !important;
      }
    }
  }
`;

export default GlobalStyle;
