import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { Container } from './App.styled';
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
    debugger;
    const id = nanoid();
    const newContact = { ...props, id };

    if (contacts.length === 0) {
      return this.setState({ contacts: [newContact] });
    }
    this.state.contacts.find(({ name }) => name === newContact.name)
      ? toast.warn(`🦄 The contact with the name "${newContact.name}" already exists`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          })
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
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
  deleteContacts = idContact => {
    const { contacts } = this.state;
    console.log(idContact);
    return this.setState({
      contacts: contacts.filter(({ id }) => id !== idContact),
    });
  };
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFilteredContact();
    const totalContactCount = contacts.length;
    return (
      <Container>
        <ContactForm onSubmit={this.onSubmitForm} />
        <ToastContainer />
        <h4>All contacts: {totalContactCount}</h4>
        {contacts.length > 0 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            deleteContacts={this.deleteContacts}
          />
        )}
      </Container>
    );
  }
}

export default App;
