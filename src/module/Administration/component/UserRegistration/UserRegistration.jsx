import { Formik } from 'formik';
import { LoginSchema } from 'module/pages/LoginPage/Schema';
import { useState } from 'react';
import { useAddUserMutation } from 'service/redux/api';
import { AutoGeneratePassword } from '../AutoGeneratePassword/AutoGeneratePassword';
import { Input } from '../Input/Input';
import { createUserNotification } from '../UsersList/helpers';
import { Container, FormContainer, Title, SubmitBtn } from './UserRegistration.styled';

export const UserRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [addUser, { isLoading }] = useAddUserMutation();

  const handleFormSubmit = async ({ login, password }, { resetForm }) => {
    const result = await addUser({ login, password });
    createUserNotification(result, login);
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={{ login: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, values }) => (
          <FormContainer>
            <Title>Введіть данні для нового користувача</Title>

            <Input
              name={'login'}
              placeholder={'Логін'}
              touched={touched}
              errors={errors}
            />

            <Input
              type={showPassword ? 'text' : 'password'}
              name={'password'}
              placeholder={'Пароль'}
              touched={touched}
              errors={errors}
              state={{ showPassword, setShowPassword }}
            />

            <AutoGeneratePassword
              functionSetPassword={newValue => (values.password = newValue)}
            />

            <SubmitBtn type="submit" disabled={isLoading}>
              {isLoading ? 'Зачекайте' : 'Зберегти'}
            </SubmitBtn>
          </FormContainer>
        )}
      </Formik>
    </Container>
  );
};
