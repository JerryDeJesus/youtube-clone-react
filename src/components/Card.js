import { Component } from "react";

class Card extends Component {
  render() {
    return (
    <div id="team-container">
      <div className="card">
        <h2>Jerry DeJesus</h2>
        <div className="card-pic">
          <img src="https://avatars.githubusercontent.com/u/86433443?v=4" alt="JerryPic"/>
        </div>
        <a target="_blank" rel="noreferrer" href="https://github.com/JerryDeJesus">Jerry's GitHub</a>
        <p>somethiing something</p>
      </div>
      
        
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