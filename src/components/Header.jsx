import React from "react";
import Styles from "../Styles.module.sass";

function Header() {
  return (
    <div className="d-flex w-100 align-items-center justify-content-between mt-5">
      <h2>Markdown Previewer</h2>
      <div className={Styles.markdown_info}>
        <i>
          <b>i</b>
        </i>
      </div>
    </div>
  );
}

export default React.memo(Header);
