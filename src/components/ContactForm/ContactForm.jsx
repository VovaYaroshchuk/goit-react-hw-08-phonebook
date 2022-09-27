import { useState } from "react";
import { useFetchContactsQuery, useCreateContactMutation} from '../../redux/slice';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import Button from '@mui/material/Button';

function ContactForm() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

 
     

  const changeInputName = event => {
    setName(event.currentTarget.value);
  };
  
  const changeInputNumber = event => {
    setNumber(event.currentTarget.value);
  };
  

    const formSubmit = event => {
      event.preventDefault();  
      
       const data = { name, number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }     
    
    createContact(data);

    reset();
    };
    
  
    const reset = () => {
      setName('');
      setNumber('');
    };
    
   
        return (
            <form onSubmit={formSubmit} className={styles.form}>
          <label className={styles.label}>
            Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder='Name may contain only letters, apostrophe, dash and spaces.'
                required
                value={name}
                onChange={changeInputName}
                className={styles.input}
              />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
                onChange={changeInputNumber}
                className={styles.input}
            />
          </label>
            <Button type="submit" variant="contained" disabled={isLoading}>Add contact</Button>
        </form>
        );
    
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;