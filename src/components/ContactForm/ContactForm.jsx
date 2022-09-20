
import { useState } from "react";
import styles from './ContactForm.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "redux/contacts/items";

const INIT_STATE = {
    name: "",
    number: "", //phone
}

export default function ContactForm () {
    const [contact, setContact] = useState({...INIT_STATE})

    const dispatch = useDispatch();

    function onInputChange(event) {
        const { name, value } = event.currentTarget;
        setContact({...contact, [name]: value });
    };

    function onFormSubmit(event) {
        event.preventDefault();
        dispatch(addContact(contact));
        setContact({ ...INIT_STATE });
    };

        return (
            <form className={styles.form} onSubmit={onFormSubmit}>
                <div>
                    Name:
                    <input className={styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={contact.name}
                        onChange={onInputChange}
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
                        value={contact.number}
                        onChange={onInputChange}
                    />
                </div>
                <div>
                    <button className={styles.btn} type="submit">Add</button>
                </div>
            </form>
        );
    
}

