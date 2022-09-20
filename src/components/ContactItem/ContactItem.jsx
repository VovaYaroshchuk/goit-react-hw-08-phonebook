import PropTypes from 'prop-types';


function ContactItem({name, number, onDeleteContact}) {
    return (
        <>
        <li key={name} >
                <p>{name}: {number}</p>
                
                </li>
        </>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object,
    onDeleteContact: PropTypes.func,
};


export default ContactItem;