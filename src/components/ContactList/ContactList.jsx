import React  from "react";
import ContactItem from "components/ContactItem/ContactItem";
import styles from "./ContactList.module.css";

import { deleteContact, selectItems } from "../../redux/contacts/items";
import { selectFilter } from "redux/contacts/filter";
import { useSelector, useDispatch } from "react-redux";

const ContactList = () => {

    const lowCaseFilter = useSelector(selectFilter).toLowerCase();
    
    const contacts = useSelector(selectItems);

    const dispatch = useDispatch();

    return (
        contacts.length === 0 ?
        <p>No contacts so far...</p> :           
        <ul className={styles.list}>
            { contacts.map((contact) => {
                return (contact.name.toLowerCase().includes(lowCaseFilter) &&
                    <li key={contact.id} >
                        <ContactItem
                            name={contact.name}
                            number={contact.number}
                        />
                        <button
                            type="button"
                            onClick={() => dispatch(deleteContact(contact.id))}
                           
                        >Delete contact
                        </button>
                    </li>);         
            })}
        </ul>        
    );
}

export default ContactList;