import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import styles from "./PhoneBook.module.css";

function PhoneBook () {
    
      return (
        <>
                <h1 className={styles.title}>Phonebook</h1>
                <h2 className={styles.text}>Add a new contact</h2>
                <ContactForm />
                <h2 className={styles.text}>Contacts </h2>
                <Filter  />
                <ContactList  />
            </>
      )
}
export default PhoneBook;



