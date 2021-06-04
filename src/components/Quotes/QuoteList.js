import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./QuoteList.module.css";

import QuoteItem from "./QuoteItem";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.author[0] > quoteB.author[0] ? 1 : -1;
    } else {
      return quoteA.author[0] < quoteB.author[0] ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // default JavaScript Constructur Function
  const queryParams = new URLSearchParams(location.search);

  const isSortingAsc = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const handleChangeSorting = () => {
    // can use objects instead of stirng in all react router components
    history.push({
      pathname: location.pathname,
      search: `sort=${isSortingAsc ? "desc" : "asc"}`,
    });
    // history.push(`${location.pathname}?sort=${isSortingAsc ? "desc" : "asc"}`);
  };

  return (
    <>
      <div className={styles.sorting}>
        <button onClick={handleChangeSorting}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

QuoteList.propTypes = {
  quotes: PropTypes.array,
};

export default QuoteList;
