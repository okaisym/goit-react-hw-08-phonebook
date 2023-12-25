import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  margin-bottom: 5px;
  color: #6495ed;
  font-weight: 600;
  align-items: baseline;
  flex-direction: column;
`;

export const AddContactBtn = styled.button`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 5px;
  outline: none;
  border: 1px solid #6495ed;
  max-width: 500px;
  margin: 15px auto;
  display: block;
  background-color: #6495ed;
  color: white;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #4169e1;
    box-shadow: 0 0 10px #fff;
  }
  
  font-weight: 600;`;

export const FormContainer = styled.div`
  display: flex;
`;

export const StyledField = styled(Field)`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 5px;
  outline: none;
  border-color: #6495ed;
  max-width: 500px;
  margin: 15px auto;
  display: block;
`;
