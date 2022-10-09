import React, { useEffect, useState } from "react";
import "./Quote.css";
import "../Header/Header.css";
import QuoteModal from "./QuoteModal";

function Quote({ name, Icon }) {
  const [showQuote, setShowQuote] = useState(false);
  const [quotes, setQuotes] = useState([])
  
  async function fetchQuote() {
      const res = await (await fetch("https://type.fit/api/quotes"))
      const data = await res.json()
      setQuotes([...data])
    }
    
    useEffect(() => {
        fetchQuote().catch((e) => console.log('no internet'))
    }, [])
    
  const quote = quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <>
      <span className="nav__link" onClick={() => setShowQuote(true)}>
        <Icon className="nav__icon" /> {name}
      </span>
      {showQuote && <QuoteModal setShowQuote={setShowQuote} quote={quote} />}
    </>
  );
}

export default Quote;
