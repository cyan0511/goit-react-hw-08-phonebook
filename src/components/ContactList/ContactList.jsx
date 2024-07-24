// import { ContactListItem } from '../ContactListItem/ContactListItem';
// import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../store/contacts/selectors';
import { Table } from '../Table/Table';
import { deleteContact } from '../../store/contacts/operations';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
    width: '250px',
  },
  {
    id: 'number',
    numeric: true,
    disablePadding: false,
    label: 'Number',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: '',
    align: 'right',
  },
];

export const ContactList = ({onEdit}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    return contacts?.filter(c => filter
      .findBy === ''
        || c.name.toLowerCase().includes(filter.value.toLowerCase())
        || c.number.includes(filter.value))
        || [];
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  const onDelete = id => {
    // setIsDeleting(true);
    dispatch(deleteContact(id));
  /*  setTimeout(() => {
      dispatch(deleteContact(id));
    }, 900);*/
  };

  return (<Table onEdit={onEdit} onDelete={onDelete} headCells={headCells} rows={[...filteredContacts]} />);

  /* return (
    <div>
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>

    </div>
  ); */
};
