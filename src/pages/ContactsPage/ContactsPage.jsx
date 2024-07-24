import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactList } from 'components/ContactList/ContactList';
import { getContacts, getError, getIsLoading } from '../../store/contacts/selectors';
import { fetchContacts } from '../../store/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import { Button, Drawer } from '@mui/material';
import { CancelOutlined, ContactPhoneOutlined } from '@mui/icons-material';
import { Notify } from 'notiflix';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const [selectedContact, setSelectedContact] = useState(null);
  const contacts = useSelector(getContacts);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Notify.failure(error);
    }
  }, [error]);

  const onEdit = id => {
    const contact = contacts.find(c => c.id === id);
    setSelectedContact(contact);
    setOpen(true);
  };

  const handleNewContact = () => {
    setSelectedContact(null);
    setOpen(true)
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Your Contact List....</title>
      </Helmet>
      <div className="container">
        {isLoading && (
          <Loader />
        )}
        <div className={css['contacts-container']}>
          <div className={css.filter}>
            <h2>Contacts</h2>
            <Button title="New Contact" style={{ width: '145px', gap: 5 }} variant="outlined" onClick={handleNewContact}>
              <ContactPhoneOutlined />
              New
            </Button>
            {error && <b style={{ color: 'red' }}>Error: {error}</b>}
            <Filter />
            <ContactList onEdit={onEdit} />
          </div>


          <Drawer open={open} onClose={toggleDrawer(false)}>
            <Button style={{ display: 'flex', justifyContent: 'flex-end' }} onClick={toggleDrawer(false)}>
              <CancelOutlined />
            </Button>
            <ContactForm contact={selectedContact} />
          </Drawer>

        </div>
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
