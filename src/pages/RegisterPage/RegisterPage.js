import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterPage.module.css';
import Button from '@mui/material/Button';


export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();    
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.title}>Registration page</h1>

      <form onSubmit={handleSubmit} className={styles.form}  autoComplete="off">
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </label>

        {/* <button type="submit" className={styles.button}>Register</button> */}
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </div>
  );
}