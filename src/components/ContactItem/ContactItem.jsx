import React from "react";
import styles from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/slice';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactItem({ contact }) {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    
    return (
        <div className={styles.item}>
            <p className={styles.contact}>{contact.name}: {contact.number}</p>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => {deleteContact(contact.id);}} disabled={isDeleting}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </Button>
        </div>             
        
    )
};



export default ContactItem;