import PropTypes from 'prop-types';


function ContactItem({contact,onDeleteContact}) {
    return (
        <>
        <li key={contact.name} >
                <p>{contact.name}: {contact.number}</p>
                <button onClick={()=>onDeleteContact(contact.name)}>Delete</button>
                </li>
        </>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object,
    onDeleteContact: PropTypes.func,
};


export default ContactItem;