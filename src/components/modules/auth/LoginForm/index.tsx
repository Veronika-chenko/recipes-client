import {
  Paper,
  Typography,
  styled,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './validation';

const FormPaper = styled(Paper)(({ theme }) => ({
  width: '500px',
  height: 'fit-content',
  padding: '32px',
}));

const ErrorText = ({ error }: { error: string | undefined }) => {
  return (
    <Typography
      sx={{ position: 'absolute', top: '100%', fontSize: '0.75rem' }}
      color='error'
    >
      {error}
    </Typography>
  );
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormPaper>
      <Grid component='form' onSubmit={onSubmit}>
        <Typography variant='h5' component='h2' mb={4}>
          Registration
        </Typography>
        <Grid container direction='column' rowGap={4} mb={6}>
          <Grid sx={{ position: 'relative' }}>
            <TextField
              label='Email'
              autoComplete='email'
              {...register('email')}
              fullWidth
            />

            {errors?.email && <ErrorText error={errors.email.message} />}
          </Grid>
          <Grid sx={{ position: 'relative' }}>
            <TextField
              type='password'
              label='Password'
              autoComplete='current-password'
              {...register('password')}
              fullWidth
            />
            {errors?.password && <ErrorText error={errors.password.message} />}
          </Grid>
        </Grid>
        <Button
          type='submit'
          variant='contained'
          size='large'
          sx={{ width: '100%' }}
        >
          Sign In
        </Button>
      </Grid>
    </FormPaper>
  );
};
