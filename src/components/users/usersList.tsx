import { IUser } from '../../models/user.interface';
import UserItem from './userItem';

import styles from './users.module.scss';

interface IUsersListProps {
  users: IUser[];
}

const UsersList = ({ users }: IUsersListProps) => {
  return (
    <ul className={styles.users}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
