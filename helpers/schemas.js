import * as Yup from 'yup';

export const saleSchema = Yup.object().shape({
  name: Yup.string().required(),
  message: Yup.string().required(),
});
