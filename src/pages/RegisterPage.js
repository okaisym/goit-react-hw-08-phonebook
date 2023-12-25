import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import styled from '@emotion/styled';

export default function Register() {
  return (
    <div>
      <Title>Registration</Title>
      <RegisterForm />
    </div>
  );
}

const Title = styled.h1`
 display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 3px 3px 3px #fff, -1px -1px 5px #fff;
  font-weight: 800;
  color: #6495ed;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 25px;`