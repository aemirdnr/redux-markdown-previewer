import { useSelector } from "react-redux";
import Styles from "../Styles.module.sass";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview() {
  const text = useSelector((state) => state.markdown.input);
  const isOpen = useSelector((state) => state.markdown.isOpen);
  const preview = useSelector((state) => state.markdown.help);
  return (
    <div className={Styles.markdown_box}>
      <ReactMarkdown
        className={Styles.markdown_output}
        children={!isOpen ? text : preview}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </div>
  );
}

export default Preview;
