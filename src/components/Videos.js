import React from "react";
import { Component } from "react";
import YouTube from 'react-youtube';

class Videos extends Component {

  render() {
    return (
      <div className="videos">
        <YouTube videoId={this.props.match.params.id}/>    
      </div>
    );
  }
}

export default Videos;