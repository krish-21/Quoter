import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/Quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const handleAddQuote = (quoteData) => {
    sendRequest(quoteData);

    // can go back
    // history.push("/quotes");

    // cannot go back
    // history.replace("/quotes");
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={handleAddQuote} />
  );
};

export default NewQuote;
