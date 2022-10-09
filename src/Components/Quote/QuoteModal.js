import React from "react";
import "./Quote.css";

function QuoteModal({ setShowQuote, quote }) {

  // if (!quote){
  //   setShowQuote(false)
  // }else{
  //   setShowQuote(true)
  // }

  return (
    <div className="quote__modal">
      <div className="quote__modal-content">
        <div className="quote__modal-quote">
          <div className="quote__modal-title">{quote?.text || "OOPs Check your internet!"}</div>
          <h5 className="quote__modal-subtitle">{quote?.author}</h5>
        </div>
        <div
          className="quote__modal-button"
          onClick={() => setShowQuote(false)}
        >
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default QuoteModal;
