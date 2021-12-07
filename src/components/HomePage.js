import React from 'react';
import { Component } from 'react';

class HomePage extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="HomePage">
        HomePage
        <Link exact to="/">

        </Link>
      </div>
    )
  }
}

export default HomePage