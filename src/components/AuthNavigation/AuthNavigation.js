import styles from './AuthNavigation.module.css';
import { NavLink } from 'react-router-dom';

function AuthNavigation() {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Log in
      </NavLink>
    </nav>
  );
}

export default AuthNavigation;