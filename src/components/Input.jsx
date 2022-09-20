import { useDispatch, useSelector } from "react-redux";
import { inputUpdate } from "../redux/markdownSlice";
import Styles from "../Styles.module.sass";

function Input() {
  const textInput = useSelector((state) => state.markdown.input);
  const isOpen = useSelector((state) => state.markdown.isOpen);
  const textHelp = useSelector((state) => state.markdown.help);
  const dispatch = useDispatch();

  return (
    <div className={Styles.markdown_box}>
      <textarea
        className={Styles.markdown_input}
        value={!isOpen ? textInput : textHelp}
        onChange={(e) => dispatch(inputUpdate(e.target.value))}
        readOnly={isOpen}
      ></textarea>
    </div>
  );
}

export default Input;
