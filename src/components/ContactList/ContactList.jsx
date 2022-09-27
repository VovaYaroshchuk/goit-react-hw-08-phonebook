import React from "react";
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from '../../redux/slice';
import { useSelector } from 'react-redux';
import ContactItem from "components/ContactItem/ContactItem";
import Loader from "components/Loader/Loader";
import styles from './ContactList.module.css';



function ContactList() {
    const { data: contacts, isFetching } = useFetchContactsQuery();
    const filter = useSelector(state => state.filter.value)

    const getFiltredContacts = () => { 
    if (!contacts) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filtredContacts = getFiltredContacts();

return (
    <>
        {isFetching && <Loader />}
        {contacts && (
            <ul className={styles.list}>
                {filtredContacts.map(contact => (
                    <li key={contact.id}>
                        <ContactItem contact={contact} />
                    </li>
                ))}
           </ul> 
        )}
        
        </>
        
    )
    
}
    
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactList;