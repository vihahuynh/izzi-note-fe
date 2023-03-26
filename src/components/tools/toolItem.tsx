import styles from './tools.module.scss';
import classnames from 'classnames';

const ToolItem = (): JSX.Element => {
  return (
    <li className={classnames(styles.toolItem, styles.toolItemMedium)}>
      <i className={classnames(styles.toolItemIcon, styles.toolItemIconMedium)}>
        icon
      </i>
      <span
        className={classnames(
          styles.toolItemTooltip,
          styles.toolItemTooltipMediumBottom
        )}
      >
        tooltip
      </span>
    </li>
  );
};

export default ToolItem;
