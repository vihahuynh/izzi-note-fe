import SidebarItem from './sidebarItem';
import { sidebarList } from './sidebarListData';
import styles from './sidebar.module.scss';
import { useState } from 'react';

const Sidebar = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState<string>('notes');

  const onSelectSidebarItem = (id: string): void => {
    setActiveSidebarItem(id);
  };

  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        {sidebarList.map((sidebarItem) => {
          return (
            <SidebarItem
              id={sidebarItem.id}
              key={sidebarItem.id}
              text={sidebarItem.text}
              icon={sidebarItem.icon}
              isActive={sidebarItem.id === activeSidebarItem}
              onClick={onSelectSidebarItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
