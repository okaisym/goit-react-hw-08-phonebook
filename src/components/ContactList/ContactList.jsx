import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { deleteContact } from '../../redux/contacts/operations';
import { filterContacts } from '../../redux/contacts/contactsSelectors';
import { Item } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filterContacts);

  return (
    <List>
      {contacts.map(contact => (
        <Item
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={() => {
            Notify.info(`${contact.name} removed from your phone book`);
            dispatch(deleteContact(contact.id));
          }}
        />
      ))}
    </List>
  );
};