import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
require("dotenv").config();

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      searchResults: [],
    };
  }

  handleInput = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      searchValue: "",
    });

    // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${process.env.REACT_APP_API_KEY}
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ searchResults: data.items });
      });
    console.log(this.state.searchResults);
  };

  render() {
    const videoItems = this.state.searchResults.map((eachResult) => {
      return (
        <div key={eachResult.snippet.description}>
          <Link to="/videos">
            {eachResult.snippet.title}
          </Link>
          <div>
              <img src={eachResult.snippet.thumbnails.default.url} alt="thumbnail" />
          </div>
        </div>
      );
    });

    return (
      <div className="HomePage">
        homepage
        <div>
          <form onSubmit={this.handleSubmit}>
            {videoItems}
            <input
              type="text"
              placeholder="Search"
              value={this.state.searchValue}
              onInput={this.handleInput}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
