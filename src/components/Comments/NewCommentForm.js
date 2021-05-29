import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

import styles from "./NewCommentForm.module.css";

import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment, quoteId } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    // send comment to server
    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className={styles.control} onSubmit={handleFormSubmit}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={styles.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

NewCommentForm.propTypes = {
  quoteId: PropTypes.string,
  onAddedComment: PropTypes.func,
};

export default NewCommentForm;
