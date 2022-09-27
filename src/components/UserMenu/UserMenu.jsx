import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import Button from '@mui/material/Button';


export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div >
      <span className={styles.name}>Welcome, {name}</span>
      <Button variant="contained" type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </div>
  );
}