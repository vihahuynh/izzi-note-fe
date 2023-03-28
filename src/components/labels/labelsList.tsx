import LabelItem from './labelItem';

import styles from './label.module.scss';
import ILabel from '../../models/label.interface';

interface ILabelListProps {
  labels: ILabel[];
}

const LabelsList = ({ labels }: ILabelListProps) => {
  return (
    <ul className={styles.labels}>
      {labels.map((label) => (
        <LabelItem key={label.id} label={label} />
      ))}
    </ul>
  );
};

export default LabelsList;
