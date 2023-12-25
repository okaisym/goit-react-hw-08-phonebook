import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/Form/Form';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { useSelector } from 'react-redux';
import { Searchbar } from '../../components/Searchbar/Searchbar';

export const ContactsContainer = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Searchbar />
      {contacts.length > 0 ? <ContactList /> :  <p>No contacts found</p>}
    </div>
  );
};