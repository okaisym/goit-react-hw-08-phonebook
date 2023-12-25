import { useSelector, useDispatch } from "react-redux";
import { ContactForm } from "components/Form/Form";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ContactList } from "components/ContactList/ContactList";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Loader } from "components/Loader/Loader";
import { Title, Container, TextItem } from "./App.styled";

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Searchbar />
      {contacts.length > 0 ? <ContactList /> : <TextItem>No contacts available</TextItem>}
    </Container>
  );
};
