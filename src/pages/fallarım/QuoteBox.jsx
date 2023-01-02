import React from "react";
import "./fallarım.css";
class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchData() {
    fetch("https://api.quotable.io/random")
      .then(resolved => resolved.json())
      .then(res => {
        this.setState({
          quote: res.content,
          author: res.author
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  handleClick() {
    this.fetchData();
  }

  render() {
    const quote = '"' + this.state.quote + '"';
    const author = "-" + this.state.author;

    return (
      <div id="quote-box">
        <div id="container">
          <div className="text">
            <p id="text">{quote}</p>
            <p id="author">{author}</p>
          </div>
          <div className="buttons">
            <button id="new-quote" onClick={this.handleClick}>
              New Quote
            </button>{" "}
            <br /> <br />
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${quote} ${author}&hashtags=quotes`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
