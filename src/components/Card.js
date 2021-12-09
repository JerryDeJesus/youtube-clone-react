import { Component } from "react";
import groupMembers from "../data/groupMembers";

class Card extends Component {
  constructor(){
    super();
    this.state= {
      people: groupMembers,
    }
  }

  render() {
    const {people} = this.state;
    const { name, description, photo, story } = this.state;

    return (
    <div id="team-container">
      <div className="card">
        <h2>{people[0].name}</h2>
        <div className="card-pic">
          <img src={people[0].photo} alt={people[0].name}/>
        </div>
        <a target="_blank" rel="noreferrer" href="https://github.com/JerryDeJesus">Jerry's GitHub</a>
        <p>{people[0].description}</p>
        <p>{people[0].story}</p>
      </div>

      <div className="card">
        <h2>{people[1].name}</h2>
        <div className="card-pic">
          <img src={people[1].photo} alt={people[1].name}/>
        </div>
        <a target="_blank" rel="noreferrer" href="https://github.com/christina-ml">Christina's GitHub</a>
        <p>{people[1].description}</p>
      </div>

      <div className="card">
        <h2>{people[2].name}</h2>
        <div className="card-pic">
          <img src={people[2].photo} alt={people[2].name}/>
        </div>
        <a target="_blank" rel="noreferrer" href="https://github.com/JerryDeJesus">Jerry's GitHub</a>
        <p>{people[2].description}</p>
      </div>
      
      {/* our bios that we had with our info */}
        <div className="card">
          <h2>Sara D'Arce</h2>
          <div className="card-pic">
            <img
              src="https://avatars.githubusercontent.com/u/1423883?v=4"
              alt="SaraPic"
            />
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/saradarce"
          >
            Sara's GitHub
          </a>
          <p>
          Becoming a full-stack web developer is directly related to my obsession with marrying music and technology, along with the rabbit hole that is my startup-ConcertMagnet. My love affair with music and its industry, however, started at a very young age. I've been blessed enough to work intermittently in music at Electric Lady Studios and with managers who've handled some of the most revered artists in the world. 

Post earning Google's Project Management Certification and acquiring the title of SCRUM Master, my goals are to build things that make the music industry more prosperous, while hand-in-hand, funding causes that create harmony between man, animals, and the environment.
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
