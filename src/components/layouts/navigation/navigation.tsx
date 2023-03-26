import ToolList from '../../tools/toolList';
import SearchBar from './searchBar';

import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationLeft}>
        <div className={styles.sidebarBox}>
          <span className={styles.sidebarBtn}></span>
        </div>
        <div className={styles.logoBox}>
          <img src='' alt='' className={styles.logoImg} />
          <h2 className={styles.logoTitle}>IZ Note</h2>
        </div>
      </div>
      <SearchBar />
      <ToolList />
    </div>
  );
};

export default Navigation;
