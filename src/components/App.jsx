import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = props => {
    const { contacts } = this.state;

    const id = nanoid();
    const newContact = { ...props, id };

    if (contacts.length === 0) {
      return this.setState({ contacts: [newContact] });
    }

    const isExists = Boolean(
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    );
    !isExists
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }))
      : alert(`The contact with the name "${newContact.name}" already exists`);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContact = () => {
    const { filter, contacts } = this.state;
    const filterValue = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filterValue)
    );
  };
  deleteContacts=(idContact)=>{
    const { contacts } = this.state
    console.log(idContact);
    return this.setState({contacts: contacts.filter(({ id }) => id!==idContact)})
  }
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFilteredContact();
    const totalContactCount=contacts.length;
    return (
      <>
        <ContactForm onSubmit={this.onSubmitForm} />
        <><p>all contacts: {totalContactCount}</p></>
        {contacts.length > 0 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList contacts={visibleContacts} deleteContacts={this.deleteContacts} />
        )}
      </>
    );
  }
}

export default App;
