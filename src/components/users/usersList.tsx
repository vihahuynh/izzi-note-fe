import UserItem from './userItem';

import styles from './users.module.scss';

const UsersList = () => {
  return (
    <ul className={styles.styles}>
      <UserItem username='Hanemo' avatarImg='./images/user-01.png' />
    </ul>
  );
};

export default UsersList;
