import { useDispatch,useSelector } from "react-redux";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import styles from "./PhoneBook.module.css";
import PropTypes from 'prop-types';
import { addContact,changeFilter,deleteContact } from '../../redux/store';



function PhoneBook () {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const onDeleteContact = name => dispatch(deleteContact(name));
    
    const formSubmitHandler = data => {   
  
      if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert(`${data.name} is already in contacts`);
        return;
      };
      
      dispatch(addContact(data));
      
    };
  
    const changerFilter = event => {
      dispatch(changeFilter(event.currentTarget.value));     
     };
  
    
    const normalizedFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  
      return (
        <>
                <h1 className={styles.title}>Phonebook</h1>
                <h2 className={styles.text}>Add a new contact</h2>
                <ContactForm onSubmit={formSubmitHandler}/>
                <h2 className={styles.text}>Contacts </h2>
                <Filter value={filter} onChange={changerFilter}/>
                <ContactList contacts={filtredContacts} onDeleteContact={onDeleteContact}/>
            </>
      )
    // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) || []);
    // const [filter, setFilter] = useState("");

    // const deleteContact = (id) => {
    //     setContacts(contacts.filter(contact => contact.id !== id));
    // }

    // const addContact = (contact) => {
    //     contact.id = nanoid();
    //     setContacts([...contacts, contact]);
    // }
    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts));
    // } , [contacts]);



    // const changeFilter = event => {
    //     setFilter(event.target.value);
    // }
    // const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    //     return (
    //         <>
    //             <h1 className={styles.title}>Phonebook</h1>
    //             <h2 className={styles.text}>Add a new contact</h2>
    //             <ContactForm onSubmit={addContact}/>
    //             <h2 className={styles.text}>Contacts </h2>
    //             <Filter value={filter} onChange={changeFilter}/>
    //             <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
    //         </>
    //     );
}
export default PhoneBook;

PhoneBook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
};

