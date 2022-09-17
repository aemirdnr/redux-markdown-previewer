import Styles from "../Styles.module.sass";

function Input() {
  return (
    <div className={Styles.markdown_box}>
      <textarea className={Styles.markdown_input}>This is user input.</textarea>
    </div>
  );
}

export default Input;
