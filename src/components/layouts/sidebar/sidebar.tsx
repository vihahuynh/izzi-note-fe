import SidebarItem from './sidebarItem';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <SidebarItem text='Notes' />
        <SidebarItem text='Reminders' />
        <SidebarItem text='Edit labels' isActive />
        <SidebarItem text='Archive' />
        <SidebarItem text='Trash' />
      </ul>
    </div>
  );
};

export default Sidebar;
