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
        const formattedData = data.items.map((item)=>{
          if(item.snippet.title.includes("&#39;")){
            item.snippet.title = item.snippet.title.replaceAll("&#39;","'"); 
          }
          if(item.snippet.title.includes("&quot;")){
            item.snippet.title =  item.snippet.title.replaceAll("&quot;","'");
          }
          if(item.snippet.title.includes("&amp;")){
            item.snippet.title = item.snippet.title.replaceAll("&amp;","'");
          }
          return item
        })
        this.setState({
          searchResults: formattedData,
         }); 
      })
  }

  render() {
    const videoItems = this.state.searchResults.map((eachResult) => {
      return (
          <div key={eachResult.id.videoId} className="search-child">
            
            <Link to={ "videos/" + eachResult.id.videoId} className="search-results-link">
              <div className="search-results-thumbnail-div">
                <img src={eachResult.snippet.thumbnails.high.url} alt="thumbnail" className="thumbnails" />
              </div>
             <b>{eachResult.snippet.title}</b>
            </Link>
          </div>
      );
    });
    
    return (
      <div className="Home">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div id="search-bar">
              <input
                type="text"
                placeholder="Search"
                value={this.state.searchValue}
                onInput={this.handleInput}
                />
              <button type="submit" id="search-button">
                Search
              </button>
            </div>
          </form>
            <div className="search-results-container">
            {videoItems}
            </div>
        </div>
      </div>
    );
  }
}

export default Home;