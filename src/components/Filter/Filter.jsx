
import { useSelector, useDispatch } from "react-redux";
import styles from "./Filter.module.css";

import { update, selectFilter } from "redux/contacts/filter";

const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();
    function onFilterChange(event) {
        dispatch(update(event.currentTarget.value));
      }
    return (
    <label className={styles.label}>Find contacts by name:
        <input className={styles.input} type="text" value={value} onChange={onFilterChange}></input>
    </label>);
}



export default Filter;