import { extend } from 'vee-validate';
import {
  required,
  email,
  numeric,
  alpha,
  alpha_spaces as alphaSpaces,
} from 'vee-validate/dist/rules';

extend('positive', (value) => {
  return value >= 0;
});

extend('required', {
  ...required,
  message: 'Este campo es requerido',
});

extend('email', {
  ...email,
  message: 'Ingresa correo válido',
});

extend('numeric', {
  ...numeric,
  message: 'Ingresa número válido',
});

extend('alpha', {
  ...alpha,
  message: 'Ingresa texto válido',
});

extend('alpha_spaces', {
  ...alphaSpaces,
  message: 'Ingresa texto válido',
});
