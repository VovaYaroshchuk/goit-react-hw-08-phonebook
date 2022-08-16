import React, { Component } from "react";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { nanoid } from 'nanoid'
import styles from "./PhoneBook.module.css";
import PropTypes from 'prop-types';

class PhoneBook extends Component {
    state = {
        contacts: [],
        filter: "",
    };

    deleteContact = idContact => {
        this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact=>contact.id!==idContact),
        }))
      }

    formSubmitHandler = data => {
        const contact = {
          id: nanoid(),  
          name: data.name,
          number: data.number,
        }; 

        for (const item of this.state.contacts) {
            if (item.name.toLowerCase() === data.name.toLowerCase()) {
              alert(`${item.name} is already in contacts`);
              return;
            }
          }
        
        this.setState(prevState => {
            return {
                contacts: [contact, ...prevState.contacts],
            };
            }
        );
    }

    changeFilter = event => {
        this.setState({filter: event.currentTarget.value})
       };

    componentDidMount() {
      localStorage.getItem('contacts') && this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }

    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.contacts !== this.state.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }

    }

     render() {

        const normalizedFilter = this.state.filter.toLocaleLowerCase();
        const filtredContacts = this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter),
        );
        return (
            <>
                <h1 className={styles.title}>Phonebook</h1>
                <h2 className={styles.text}>Add a new contact</h2>
                <ContactForm onSubmit={this.formSubmitHandler}/>
                <h2 className={styles.text}>Contacts </h2>
                <Filter value={this.state.filter} onChange={this.changeFilter}/>
                <ContactList contacts={filtredContacts} onDeleteContact={this.deleteContact}/>
            </>
        );
}}

PhoneBook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
};

export default PhoneBook;