import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomQuote = () => {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const getQuote = () => {
    //const url = `../../db/factData.json`;
    const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        let data = res.data.quotes;
        let quoteNumber = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteNumber];
        setError("");
        setQuote(randomQuote["quote"]);
        setAuthor(randomQuote["author"]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="progress">
          <div className="indeterminate">Loading..</div>
        </div>
      ) : (
        <div
          className="card"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <div className="card-content">
            <p>
              "{quote}"- {author}
            </p>
          </div>
        </div>
      )}
      {error ? error : null}
    </div>
  );
};

export default RandomQuote;
