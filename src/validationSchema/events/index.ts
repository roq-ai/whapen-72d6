import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  user_id: yup.string().nullable(),
});
