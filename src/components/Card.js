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
    console.log("zero:", this.state.people[0])
    console.log("one:", this.state.people[1])
    console.log("two:", this.state.people[2].name)

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
        <a target="_blank" rel="noreferrer" href="https://github.com/JerryDeJesus">Jerry's GitHub</a>
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
      <h2>Christina Loiacono</h2>
      <div className="card-pic">
        <img src="https://avatars.githubusercontent.com/u/65386414?v=4" alt="ChristinaPic"/>
      </div>
      <a target="_blank" rel="noreferrer" href="https://github.com/christina-ml">Christina's GitHub</a>
      <p>bla bla blap</p>
      </div>

      <div className="card">
      <h2>Sara D'Arce</h2>
        <div className="card-pic">
          <img src="https://avatars.githubusercontent.com/u/1423883?v=4" alt="SaraPic"/>
        </div>
      <a target="_blank" rel="noreferrer" href="https://github.com/saradarce">Sara's GitHub</a>
      <p>Sara is not blah</p>
      </div>
    </div>
    );
  }
}

export default Card;