import styles from './searchBar.module.scss';

const SearchBar = (): JSX.Element => {
  return (
    <div className={styles.searchBar}>
      <i className={styles.searchBarIcon}></i>
      <input type='text' className={styles.searchBarInput} />
    </div>
  );
};

export default SearchBar;
