import PropTypes from "prop-types";

import styles from "./CommentList.module.css";

import CommentItem from "./CommentItem";

const CommentsList = (props) => {
  return (
    <ul className={styles.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array,
};

export default CommentsList;
