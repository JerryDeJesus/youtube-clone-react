import React from "react";
import { Component } from "react";
// import { Link, Route } from "react-router-dom";

class Videos extends Component {
  // constructor(){
  //   super()
  // }
  render() {
    const { video } = this.props;
    return (
      <div className="Videos">
        <h2>{video.videoTitle}</h2>
        <img src={this.props} alt="pic" />
        Videos
      </div>
    );
  }
}

export default Videos;