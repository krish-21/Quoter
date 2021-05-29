import { useEffect } from "react";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/Quotes/NoQuotesFound";
import QuoteList from "../components/Quotes/QuoteList";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
