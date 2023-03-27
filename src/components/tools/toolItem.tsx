import styles from './tools.module.scss';
import classnames from 'classnames';

interface IToolItemProps {
  content: string;
  tooltip: string;
  size?: string;
  position?: string;
}

const ToolItem = ({
  size = 'medium',
  position = 'bottom',
  content,
  tooltip,
}: IToolItemProps): JSX.Element => {
  return (
    <li
      className={classnames(styles.toolItem, {
        [styles.toolItemMedium]: size === 'medium',
        [styles.toolItemSmall]: size === 'small',
        [styles.toolItemTiny]: size === 'tiny',
      })}
    >
      <i
        className={classnames(styles.toolItemIcon, {
          [styles.toolItemIconMedium]: size === 'medium',
          [styles.toolItemIconSmall]: size === 'small',
          [styles.toolItemIconTiny]: size === 'tiny',
        })}
      >
        {content}
      </i>
      <span
        className={classnames(
          styles.toolItemTooltip,
          {
            [styles.toolItemTooltipMediumBottom]:
              size === 'medium' && position === 'bottom',
          },
          {
            [styles.toolItemTooltipSmallBottom]:
              size === 'small' && position === 'bottom',
          },
          {
            [styles.toolItemTooltipTinyBottom]:
              size === 'tiny' && position === 'bottom',
          }
        )}
      >
        {tooltip}
      </span>
    </li>
  );
};

export default ToolItem;
