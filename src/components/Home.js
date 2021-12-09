import React from "react";
import { Component } from "react";
require("dotenv").config();

class Home extends Component {
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
      return <div>{eachResult.snippet.title}</div>;
    });

    return (
      <div className="Home">
        <div>
          <form onSubmit={this.handleSubmit}>
            {videoItems}
            <input
              type="text"
              placeholder="Search"
              value={this.state.searchValue}
              onInput={this.handleInput}
            ></input>
            <button type="submit" id="search">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
