import React from "react";
import { useDispatch } from "react-redux";
import { openInfo } from "../redux/markdownSlice";
import Styles from "../Styles.module.sass";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="d-flex w-100 align-items-center justify-content-between mt-5">
      <h2>Markdown Previewer</h2>
      <div
        className={Styles.markdown_info}
        onClick={() => dispatch(openInfo())}
      >
        <i>
          <b>i</b>
        </i>
      </div>
    </div>
  );
}

export default React.memo(Header);
