import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import {Label, Input, FormContainer, LogInBtn} from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
    <form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" required minLength={7} />
      </Label>
      <LogInBtn type="submit">Log In</LogInBtn>
    </form>
    </FormContainer>
  );
};