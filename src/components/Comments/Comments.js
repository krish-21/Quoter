import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

import styles from "./Comments.module.css";

import LoadingSpinner from "../UI/LoadingSpinner";
import NewCommentForm from "./NewCommentForm";
import CommentList from "./CommentList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { id } = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const handleAddingComment = () => {
    setIsAddingComment(true);
  };

  const handleAddedComment = useCallback(() => {
    sendRequest(id);
    setIsAddingComment(false);
  }, [sendRequest, id]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet</p>;
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentList comments={loadedComments} />;
  }

  return (
    <section className={styles.comments}>
      {!isAddingComment && (
        <button className="btn" onClick={handleAddingComment}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={id} onAddedComment={handleAddedComment} />
      )}
      <h2>User Comments</h2>
      {comments}
    </section>
  );
};

export default Comments;
