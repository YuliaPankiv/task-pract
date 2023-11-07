import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList } from './ContactList.styled';
import { ContactsItem } from 'components/ContactItem/ContactItem.styled';

export const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}> List of contact book</h3>
      <ContactsList>
        {' '}
        {contacts.map(({ name, number, id }) => (
          <ContactsItem key={id}>
            <ContactItem
              name={name}
              number={number}
              id={id}
              deleteContacts={deleteContacts}
            />
          </ContactsItem>
        ))}
      </ContactsList>
    </>
  );
};
