import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Must be more than 2 characters')
    .max(40, 'Must be less than 40 characters')
    .matches(
      /^[A-Za-zА-Яа-яЁёҐґІіЇїЄє\s,'"'-.]+(?:\s+[A-Za-zА-Яа-яЁёҐґІіЇїЄє]+){0,3}$/u,
      'Not a valid name'
    )
    .required('Name is required'),
  email: yup
    .string()
    .min(7, 'Must be more than 7 characters')
    .max(63, 'Must be less than 63 characters')
    .email(
      'minimum 2 characters before @, cannot start with a dash, only Latin letters'
    )
    .required('Email is required')
    .matches(
      /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u,
      'minimum 2 characters before @, cannot start with a dash, only Latin letters'
    ),
  password: yup
    .string()
    .required('Password is required')
    .max(32, 'Must be less than 32 characters')
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{7,}/,
      'The password must contain uppercase and lowercase letters, at least 7 symbols'
    ),
});
