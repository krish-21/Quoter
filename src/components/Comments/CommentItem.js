import PropTypes from "prop-types";

import styles from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={styles.item}>
      <p>{props.text}</p>
    </li>
  );
};

CommentItem.propTypes = {
  text: PropTypes.string,
};

export default CommentItem;
