import { useState, useEffect } from 'react';
import "./quote.css";

function Quote() {

  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length)
        setQuotes(data[randomNum])
      })
  }

  useEffect(() => {
    getQuote();
  }, [])

  return (
    <div className="App">
      <div className='quote'>

        <p>{quotes.text}</p>
        <p>{quotes.author}</p>

        <div className='btnContainer'>
          <button onClick={getQuote} className="btn">Alıntıyı Geç</button>
        </div>

      </div>
    </div>
  );
}

export default Quote;