import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import contacts from './db/contacts.json';

import './App.css';

  const initialContacts = [ {contacts}
  ]
  const App = () => {
    const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts);
    const [filter, setFilter] = useState('');

  

    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (name, number) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const deleteContact = (id) => {
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };

    const getFilteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <SearchBox filter={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
      </div>
    );
  };

export default App;

