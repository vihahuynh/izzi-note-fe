import { IUser } from '../../models/user.interface';
import styles from './users.module.scss';

interface IUserItemProps {
  user: IUser;
}

const UserItem = ({ user }: IUserItemProps) => {
  return (
    <li className={styles.usersItem}>
      <span className={styles.usersItemTooltip}>{user.username}</span>
      <img
        className={styles.usersItemImg}
        src={user.email}
        alt={user.username}
      />
    </li>
  );
};

export default UserItem;
