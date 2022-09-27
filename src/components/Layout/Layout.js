import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Layout.module.css';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';

function Layout() {
  return (
    <div className={styles.box}>
      <AppBar />      
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>          
    </div>
  );
}

export default Layout;