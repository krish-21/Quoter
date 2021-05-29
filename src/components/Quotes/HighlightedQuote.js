import PropTypes from "prop-types";

import styles from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={styles.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

HighlightedQuote.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};

export default HighlightedQuote;
