import React from "react";
import { Component } from "react";
import YouTube from 'react-youtube';

class Videos extends Component {
  // constructor(){
  //   super()
  // }

  render() {
    console.log(this.props.match.params.id);
    // const { video } = this.props;
    return (
      <div className="Videos">
        <YouTube videoId={this.props.match.params.id}/>
        {/* <h2>{video.videoTitle}</h2> */}
        <img src={this.props} alt="pic" />
      </div>
    );
  }
}

export default Videos;