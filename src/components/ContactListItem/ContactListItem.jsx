import css from './ContactListItem.module.css';
import { useState } from 'react';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contacts/operations';
import { Button } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      dispatch(deleteContact(contact.id));
    }, 900);
  };

  return (
    <li className={clsx(css['contact-list-item'], { [css['fade-out']] : isDeleting } )}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <Button onClick={handleDelete}>
        <DeleteOutlined />
      </Button>
    </li>
  );
};
