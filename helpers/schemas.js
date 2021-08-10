import * as Yup from 'yup';

export const saleSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido.').required('O campo email deve ser preenchido.'),
  name: Yup.string().min(3, () => 'Seu nome deve conter ao menos 3 letras.').required('O campo nome deve ser preenchido.'),
  numbers: Yup.array().min(1, () => 'Você deve escolher ao menos um número.').required(),
  phone: Yup.string().required('O campo de telefone deve ser preenchido.'),
});
