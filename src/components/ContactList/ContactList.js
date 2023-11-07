import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            deleteContacts={deleteContacts}
          />
        </li>
      ))}
    </ul>
  );
};
