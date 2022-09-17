import React from "react";
import Styles from "../Styles.module.sass";

function Footer() {
  return (
    <div className={Styles.markdown_footer}>
      <b>github.com/aemirdnr</b>
    </div>
  );
}

export default React.memo(Footer);
