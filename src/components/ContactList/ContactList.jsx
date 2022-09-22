import { useSelector, useDispatch } from "react-redux";

import ContactItem from "../ContactItem/ContactItem";
//import propTypes from "prop-types";
import styles from "./ContactList.module.css"

import { selectItems } from "../../redux/contacts/items";
import { selectFilter } from "redux/contacts/filter";
import { selectStatus } from "redux/contacts/status";

import { getContactsOperation, deleteContactOperation } from "redux/contacts/asyncOperations";

const ContactList = () => {

    const lowCaseFilter = useSelector(selectFilter).toLowerCase();
    
    const contacts = useSelector(selectItems);

    const dispatch = useDispatch();
    const reduxStatus = useSelector(selectStatus);

    if (!contacts) {
        //dispatch(getContacts());
        dispatch(getContactsOperation());
    }
    return (<>
        {(reduxStatus === "loading") && <p>[Loading contacts]</p>}
        {(contacts && (contacts.length === 0)) &&
            <p>No contacts so far...</p>}
        {(contacts && (contacts.length > 0)) &&
            <ul className={styles.list}>
                {contacts.map((contact) => {

                    return (contact.name.toLowerCase().includes(lowCaseFilter) &&
                        <li key={contact.id}>
                            <ContactItem
                                name={contact.name}
                                number={contact.phone}
                            />
                            <button
                                type="button"
                                onClick={() => dispatch(deleteContactOperation(contact.id))}
                            >Delete contact
                            </button>
                        </li>);
                })}
            </ul>}  
    </>             
    );

};

export default ContactList;