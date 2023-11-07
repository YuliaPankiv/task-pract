export const ContactItem = ({ name, number, id, deleteContacts }) => {
  return (
    <>
      <p>
        <span>{name}</span>:<span>{number}</span>
      </p>
      <button type="button" onClick={() => deleteContacts(id)}>
        delete
      </button>
    </>
  );
};
