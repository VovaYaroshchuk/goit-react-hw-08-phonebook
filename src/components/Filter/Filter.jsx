import React from "react";
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from "react-redux";
import { update, selectFilter } from "redux/contacts/filter";
const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();
    function onFilterChange(event) {
        //todo debounce
        dispatch(update(event.currentTarget.value));
    
      }
    return (
    <label className={styles.label}>Find contacts by name:
        <input className={styles.input} type="text" value={value} onChange={onFilterChange}></input>
    </label>);
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;