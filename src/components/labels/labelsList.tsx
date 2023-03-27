import LabelItem from './labelItem';

import styles from './label.module.scss';

const LabelsList = () => {
  return (
    <ul className={styles.labels}>
      <LabelItem label='tieu' />
      <LabelItem label='mewo' />
    </ul>
  );
};

export default LabelsList;
