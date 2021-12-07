import React from 'react';
import { Component } from 'react';


class HomePage extends Component {
  constructor(){
    super()
    this.state = {
      searchValue:""
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
    console.log("testing");
  }

  render(){
    return (
      <div className="HomePage">
        homepage
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Search" onInput={this.handleInput}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    )
  }
}

export default HomePage