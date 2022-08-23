
import { useState } from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const hendleNameChange = (e) => {
        setName(e.target.value);
    }

    
    const hendleNumberChange = (e) => {
        setNumber(e.target.value);
    }
    
    const formSubmitHandler = (e) => {
        e.preventDefault();
        onSubmit({name, number});
        setName('');
        setNumber('');
    }



        return (
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <div>
                    Name:
                    <input className={styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={hendleNameChange}
                    />
                </div>
                <div>
                    Number:
                    <input className={styles.input}
                        type="number"
                        name="number"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        value={number}
                        onChange={hendleNumberChange}
                    />
                </div>
                <div>
                    <button className={styles.btn} type="submit">Add</button>
                </div>
            </form>
        );
    
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func,
}


export default ContactForm;