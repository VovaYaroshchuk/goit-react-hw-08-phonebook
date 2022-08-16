import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    handlenumberChange = (event) => {
        this.setState({
            number: event.target.value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            number: this.state.number,
        });
        this.setState({
            name: "",
            number: "",
        });
    }



    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <div>
                    Name:
                    <input className={styles.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleNameChange}
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
                        value={this.state.number}
                        onChange={this.handlenumberChange}
                    />
                </div>
                <div>
                    <button className={styles.btn} type="submit">Add</button>
                </div>
            </form>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func,
}


export default ContactForm;