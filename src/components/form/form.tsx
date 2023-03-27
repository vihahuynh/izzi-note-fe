import ToolList from '../tools/toolList';
import classnames from 'classnames';
import styles from './form.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      {/* <span className="form__title">Take a note...</span> */}
      <input type='text' className={styles.formInput} placeholder='Title' />
      <textarea
        className={classnames(styles.formInput, styles.formInputContent)}
        rows={1}
        placeholder='Take a note'
      ></textarea>
      <ToolList />
    </form>
  );
};

export default Form;
