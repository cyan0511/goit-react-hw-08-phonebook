import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/contacts/selectors';
import { addContact, updateContact } from '../../store/contacts/operations';
import { Button, InputAdornment, TextField } from '@mui/material';
import {
  AddBoxOutlined,
  ContactPhone,
  PersonOutline,
  PhoneOutlined,
  SaveOutlined,
} from '@mui/icons-material';
import { Notify } from 'notiflix';

export const ContactForm = ({contact}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState(contact?.name);
  const [number, setNumber] = useState(contact?.number);

  const handleNameChange = e => {
    setName(toProperCase(e.target.value));
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    // prevent the form from refreshing when submitted
    e.preventDefault();

    // if name and number is empty, it will not submit(return)
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.some(
      c => c.name.toLowerCase() === name.toLowerCase()
      && (contact?.id ? c.id !== contact.id : true)
    );

    if (existingContact) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    if (contact?.id) {
      // update
      dispatch(updateContact({ id: contact.id, name, number }));

    } else {
      // new
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  const toProperCase = name => {
    return name.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  }

    return (
      <div className={css['contact-form']}>
        <form  onSubmit={handleSubmit}>
          <ContactPhone sx={{ fontSize: 50, my: 0.5 }} />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              label="Name"
              type="text"
              name="name"
              // add \ before - in [' \-] to make it work (LMS)
              inputProps={{
                pattern:"^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."}}
              required
              //must have value prop when onChange prop is used
              value={name}
              onChange={handleNameChange}
            />

            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneOutlined />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              type="tel"
              label="Number"
              name="number"
              // add \ before - in [\-.\s] to make it work (LMS)
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              inputProps={{
                pattern: "\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",
                title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              }}

              required
              //must have value prop when onChange prop is used
              value={number}
              onChange={handleNumberChange}
            />

            <Button variant="outlined" style={{ gap: 5 }} type="submit">
              {contact?.id ? (
                <>
                  <SaveOutlined />
                  Update Contact
                </>) : (<>
                <AddBoxOutlined/>
                Add Contact
              </>) }
            </Button>
        </form>
      </div>
    );
}
