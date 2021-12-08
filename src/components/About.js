import React from "react";
import { Component } from "react";
import Card from "./Card";

class About extends Component {
  render(){
    return (
      <div className="About">
        <p>
          Description: React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.
        </p>
        
        <Card/>
      </div>
    )
  }
}

export default About;
