import './tools.module.scss';
import styles from './tools.module.scss';

import ToolItem from './toolItem';

interface IToolListProps {
  size?: string;
  position?: string;
}

const ToolList = ({ size = 'medium', position = 'bottom' }: IToolListProps) => {
  return (
    <ul className={styles.toolList}>
      <ToolItem
        size={size}
        position={position}
        content='icon'
        tooltip='tooltip'
      />
      <ToolItem
        size={size}
        position={position}
        content='icon'
        tooltip='tooltip'
      />
      <ToolItem
        size={size}
        position={position}
        content='icon'
        tooltip='tooltip'
      />
    </ul>
  );
};

export default ToolList;
