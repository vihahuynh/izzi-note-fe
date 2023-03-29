import styles from './sidebar.module.scss';
import classnames from 'classnames';
import { IconType } from 'react-icons';

interface ISideBarItemProps {
  id: string;
  icon: IconType;
  text: string;
  isActive?: boolean;
  onClick: (id: string) => void;
}

const SidebarItem = ({
  id,
  text,
  icon,
  isActive = false,
  onClick,
}: ISideBarItemProps) => {
  const Icon = icon;
  return (
    <li
      onClick={() => onClick(id)}
      className={classnames(styles.sidebarItem, {
        [styles.sidebarItemActive]: isActive,
      })}
    >
      <Icon
        className={classnames(styles.icon, { [styles.iconActive]: isActive })}
      />
      <span className={styles.sidebarItemText}>{text}</span>
    </li>
  );
};

export default SidebarItem;
