import React from 'react';
import { Component } from 'react';
require('dotenv').config();


class HomePage extends Component {
  constructor(){
    super()
    this.state = {
      searchValue:"",
      searchResults:[]
    }
  }

  handleInput=(event)=>{
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.setState({
      searchValue:""
    });

    // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=${process.env.REACT_APP_API_KEY}
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.state.searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    .then((res) => { return res.json()})
    .then((data) => {this.setState({searchResults: data})})
    console.log(this.state.searchResults);
  }



  render(){
    return (
      <div className="HomePage">
        homepage
        <div>
            <form onSubmit={this.handleSubmit}>
            
                <input type="text" placeholder="Search" value={this.state.searchValue} onInput={this.handleInput}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    )
  }
}

export default HomePage