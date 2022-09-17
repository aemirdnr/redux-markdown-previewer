import Styles from "../Styles.module.sass";

function Preview() {
  return (
    <div className={Styles.markdown_box}>
      <p className={Styles.markdown_output}>This is user preview.</p>
    </div>
  );
}

export default Preview;
