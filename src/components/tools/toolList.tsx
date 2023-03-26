import './tools.module.scss';
import styles from './tools.module.scss';

import ToolItem from './toolItem';

const ToolList = () => {
  return (
    <ul className={styles.toolList}>
      <ToolItem />
      <ToolItem />
      <ToolItem />
    </ul>
  );
};

export default ToolList;
