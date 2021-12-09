import React from "react";
import { Component } from "react";
import Card from "./Card";

class About extends Component {
<<<<<<< HEAD
  constructor() {
    super();
  }
  render() {
    return (
    <div className="About">About</div>
      <break>
        <div>

        </div>
    </break>

=======
  render(){
    return (
      <div className="About">
        <p>
          Description: React application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch.
        </p>
        
        <Card/>
      </div>
>>>>>>> b0580de3b3625682c5ce7df5f2726da56124bede
    )
  }
}

export default About;
