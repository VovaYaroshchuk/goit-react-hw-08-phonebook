import React  from "react";
import ContactItem from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";

const ContactList = ({ contacts,onDeleteContact }) => (
    <ul className={styles.list}>
        {contacts.map(contact => (
            <ContactItem  key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>    
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;