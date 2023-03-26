import styles from './sidebar.module.scss';
import classnames from 'classnames';

interface ISideBarItemProps {
  text: string;
  isActive?: boolean;
}

// sidebar__item--active
const SidebarItem = ({ text, isActive = false }: ISideBarItemProps) => {
  return (
    <li
      className={classnames(styles.sidebarItem, {
        [styles.sidebarItemActive]: isActive,
      })}
    >
      <i className={styles.icon}>@</i>
      <span className={styles.sidebarItemText}>{text}</span>
    </li>
  );
};

export default SidebarItem;
