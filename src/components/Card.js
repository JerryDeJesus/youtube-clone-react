import { Component } from "react";
import groupMembers from "../data/groupMembers";

class Card extends Component {
  render() {
    const BryantM = groupMembers.map((fellow)=>{
      return (
        <div className="card">
          <h2>{fellow.name}</h2>
          <div className="card-pic">
            <img src={fellow.photo} alt={fellow.name}/>
          </div>
          <a target="_blank" rel="noreferrer" href={fellow.github}>{fellow.name}'s GitHub</a>
          <p>{fellow.description}</p>
        </div>
      )
    })

    return (
    <div id="team-container">
      {BryantM}
    </div>
    );
  }
}

export default Card;