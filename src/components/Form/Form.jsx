import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { AddContactBtn, Label, FormContainer, StyledField } from './Form.styled'


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={async (values, actions) => {
          actions.resetForm();

          const contactExists = contacts.some(
            (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
          );

          if (contactExists) {
            Notify.failure(`${values.name} already in phonebook`);
            return;
          }

          try {
            await dispatch(addContact(values)).unwrap();
            Notify.success(`${values.name} added to your contacts`);
          } catch (error) {
            Notify.failure(error.message);
          }
        }}
      >
        <FormContainer>
        <Form>
          <Label>
            Name
            <StyledField type="text" name="name" placeholder="Alice" />
          </Label>

          <Label>
            Phone
            <StyledField type="text" name="number" placeholder="+380..." />
          </Label>

          <AddContactBtn type="submit">Add contact</AddContactBtn>
        </Form>
        </FormContainer>
      </Formik>
    </div>
  );
};