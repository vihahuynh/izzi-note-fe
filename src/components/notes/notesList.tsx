import NoteItem from './noteItem';
import styles from './notes.module.scss';

const NotesList = () => {
  return (
    <div className={styles.notes}>
      <NoteItem />
    </div>
  );
};

export default NotesList;
