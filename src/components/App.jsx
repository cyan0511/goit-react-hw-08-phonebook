import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
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
    );

}
