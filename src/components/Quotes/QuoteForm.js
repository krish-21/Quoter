import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import PropTypes from "prop-types";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import styles from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [didFocus, setDidFocus] = useState(false);

  const handleFormFocus = () => {
    setDidFocus(true);
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleFocusFinish = () => {
    setDidFocus(false);
  };

  return (
    <>
      <Prompt
        when={didFocus}
        message={() =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          onFocus={handleFormFocus}
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button onClick={handleFocusFinish} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

QuoteForm.propTypes = {
  onAddQuote: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default QuoteForm;
