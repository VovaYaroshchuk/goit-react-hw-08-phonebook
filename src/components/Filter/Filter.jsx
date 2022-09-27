import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../redux/filterSlice';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';


function Filter() {
     const dispatch = useDispatch()
     const filter = useSelector(state => state.filter.value);
  
  const changeFilter = event => {
    dispatch(set(event.currentTarget.value))
  };
    
    return (
<label className={styles.label}>Find contacts by name
        <input type="text" value={filter} onChange={changeFilter} ></input>
    </label>
    )   
}




Filter.propTypes = {
   value: PropTypes.string, 
};

export default Filter;