import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/Form/Form';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { Title, FormContainer, TextItem } from './ContactsContainer.styled';

export const ContactsContainer = () => {
  const contacts = useSelector(selectContacts);
  return (
    <FormContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Searchbar />
      {contacts.length > 0 ? <ContactList /> :  <TextItem>No contacts found 😥
</TextItem>}
    </FormContainer>
  );
};