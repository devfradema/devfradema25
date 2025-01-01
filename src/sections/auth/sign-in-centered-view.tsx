'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Form } from 'src/components/hook-form';

import { FormHead } from './components/form-head';
import { SignInSchema } from './components/schema';
import { SignInForm } from './components/sign-in-form';
import { FormSocials } from './components/form-socials';
import { FormDivider } from './components/form-divider';

import type { SignInSchemaType } from './components/schema';

// ----------------------------------------------------------------------

export function SignInCenteredView() {
  const defaultValues: SignInSchemaType = { email: '', password: '' };

  const methods = useForm<SignInSchemaType>({ resolver: zodResolver(SignInSchema), defaultValues });

  const { reset, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <FormHead
        title="Sign in"
        description={
          <>
            {`Don’t have an account? `}
            <Link component={RouterLink} href={paths.centered.signUp} variant="subtitle2">
              Get started
            </Link>
          </>
        }
      />

      <Form methods={methods} onSubmit={onSubmit}>
        <SignInForm />
      </Form>

      <FormDivider label="or continue with" />

      <FormSocials />
    </>
  );
}