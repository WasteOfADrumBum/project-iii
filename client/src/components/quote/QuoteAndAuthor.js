import React from 'react'
import quotes from './QuoteDB'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="card" style={{background: "transparent", border: "none"}}>

            <div className="card-body">
                <p className="card-text"><i>"{quote.quote}"</i></p>
                <h5 className="card-title">- {quote.author}</h5>
                <button
                    className="ml-3 btn-primary"
                    onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit">+<FontAwesomeIcon
                    icon={faTwitter}
                    size="1x"
                    style={{ color: "white" }}
                  /></button>
            </div>
        </div>
    )
}