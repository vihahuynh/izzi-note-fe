import LabelsList from '../labels/labelsList';
import ToolItem from '../tools/toolItem';
import ToolList from '../tools/toolList';
import UsersList from '../users/usersList';

import styles from './notes.module.scss';
import classnames from 'classnames';

const NoteItem = () => {
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
            Lorem
          </h5>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In a
            aperiam hic id aliquid aliquam consectetur autem ea eius. Magnam in
            dicta aliquid id, delectus vitae quae neque a voluptatum.
          </p>
        </div>
        <div className={styles.notesItemBottom}>
          <div className={styles.notesItemSubInfo}>
            <LabelsList />
            <UsersList />
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
