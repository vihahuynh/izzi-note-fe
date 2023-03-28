import LabelsList from '../labels/labelsList';
import ToolItem from '../tools/toolItem';
import ToolList from '../tools/toolList';
import UsersList from '../users/usersList';

import styles from './notes.module.scss';
import classnames from 'classnames';
import { INote } from '../../models/note.interface';

interface INoteItemProps {
  note: INote;
}

const NoteItem = ({ note }: INoteItemProps) => {
  return (
    <div className={styles.notesItemBox}>
      <div className={styles.notesItem}>
        <i className={styles.notesItemSelectBtn}>@</i>
        <span className={styles.notesItemPin}>
          <ToolItem size='small' position='bottom' content='@' tooltip='pin' />
        </span>
        <div>
          <h5
            className={classnames(styles.smallTitle, styles.marginBottomTiny)}
          >
            {note.title}
          </h5>
          <p className={styles.content}>{note.content}</p>
        </div>
        <div className={styles.notesItemBottom}>
          <div className={styles.notesItemSubInfo}>
            <LabelsList labels={note.labels} />
            <UsersList users={note.collaborators} />
          </div>
          <div className={styles.notesItemSubInfo}>
            <ToolList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
