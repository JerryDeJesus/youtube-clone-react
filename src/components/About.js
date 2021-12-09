import React from "react";
import { Component } from "react";
import Card from "./Card";

class About extends Component {
  render() {
    return (
      <div className="About">
        <h3 id="description-header">
          This pseudo YouTube React application allows users to search YouTube for
          videos using the YouTube API, then users may choose a video from the
          list of results to watch.
        </h3>
        <Card />
      </div>
    );
  }
}

export default About;
