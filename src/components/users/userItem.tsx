import styles from './users.module.scss';

interface IUserItemProps {
  username: string;
  avatarImg: string;
}

const UserItem = ({ username, avatarImg }: IUserItemProps) => {
  return (
    <li className={styles.usersItem}>
      <span className={styles.usersItemTooltip}>{username}</span>
      <img className={styles.usersItemImg} src={avatarImg} alt={username} />
    </li>
  );
};

export default UserItem;
