import { useState, useEffect } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { nanoid } from 'nanoid'
import styles from "./PhoneBook.module.css";
import PropTypes from 'prop-types';

function PhoneBook () {
    const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
    const [filter, setFilter] = useState("");

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    }

    const addContact = (contact) => {
        contact.id = nanoid();
        setContacts([...contacts, contact]);
    }
    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    } , [contacts]);



    const changeFilter = event => {
        setFilter(event.target.value);
    }
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

        return (
            <>
                <h1 className={styles.title}>Phonebook</h1>
                <h2 className={styles.text}>Add a new contact</h2>
                <ContactForm onSubmit={addContact}/>
                <h2 className={styles.text}>Contacts </h2>
                <Filter value={filter} onChange={changeFilter}/>
                <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
            </>
        );
}
export default PhoneBook;

PhoneBook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
};

