import React from 'react';
import { Component } from 'react';


class HomePage extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="HomePage">
        homepage
        <div>
            <form>
                <input type="text" placeholder="Search"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    )
  }
}

export default HomePage