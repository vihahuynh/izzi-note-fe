import ToolItem from '../tools/toolItem';
import styles from './label.module.scss';

interface ILabelItemProps {
  label: string;
}

const LabelItem = ({ label }: ILabelItemProps) => {
  return (
    <li className={styles.labelsItem}>
      <p className={styles.lablesText}>{label}</p>
      <span className={styles.labelsItemRemoveBtn}>
        <ToolItem
          size='tiny'
          position='bottom'
          content='x'
          tooltip='Remove label'
        />
      </span>
    </li>
  );
};

export default LabelItem;
