import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom';
require("dotenv").config();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchResults:[],
      searchValue:"",
      videoId:""
    }
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

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          searchResults: data.items,
          data: data
         });
         console.log(data);
      });
  };

  render() {
    const videoItems = this.state.searchResults.map((eachResult) => {
      return (
        <div key={eachResult.id.videoId}>
          <Link to={ "videos/" + eachResult.id.videoId}>
            {eachResult.snippet.title}
            <div>
              <img src={eachResult.snippet.thumbnails.default.url} alt="thumbnail" />
            </div>
          </Link>
          
          {eachResult.id.videoId}
        </div>
      );
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
              />
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