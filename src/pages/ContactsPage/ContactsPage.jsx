import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactList } from 'components/ContactList/ContactList';
import { getError, getIsLoading } from '../../store/selectors';
import { fetchContacts } from '../../store/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Contact List....</title>
      </Helmet>
      <div className="container">
        {isLoading && (
          <Loader />
        )}
        <h1>Phonebook</h1>
        <div className="phonebook-container">
          <div>
            <h2>New Contact</h2>
            <ContactForm />
          </div>
          <div>
            <h2>Contacts</h2>
            {error && <b style={{ color: 'red' }}>Error: {error}</b>}
            <Filter />
            <ContactList />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
