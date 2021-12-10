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

    return (
    <div id="team-container">

      <div className="card">
        <h2>{people[0].name}</h2>
        <div className="card-pic">
          <img className="selfie" src={people[0].photo} alt={people[0].name}/>
          <span className="links-container">
            <a className="social-links" target="_blank" rel="noreferrer" href="https://github.com/JerryDeJesus"><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github"/></a>
            <a className="social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jerrydejesus/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsx2OVghcTGcZcfkc5XuZcvS4vXP_W3gMYg&usqp=CAU" alt="linkedin"/></a>
          </span>
        </div>
        <p>{people[0].description}</p>
      </div>

      <div className="card">
        <h2>{people[1].name}</h2>
        <div className="card-pic">
          <img className="selfie" src={people[1].photo} alt={people[1].name}/>
          <span className="links-container">
            <a className="social-links" target="_blank" rel="noreferrer" href="https://github.com/christina-ml"><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github"/></a>
            <a className="social-links" target="_blank" rel="noreferrer" href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsx2OVghcTGcZcfkc5XuZcvS4vXP_W3gMYg&usqp=CAU" alt="linkedin"/></a>
          </span>
        </div>
        <p>{people[1].description}</p>
      </div>

      <div className="card">
        <h2>{people[2].name}</h2>
        <div className="card-pic">
          <img className="selfie" src={people[2].photo} alt={people[2].name}/>
          <span className="links-container">
            <a className="social-links" target="_blank" rel="noreferrer" href="https://github.com/saradarce"><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github"/></a>
            <a className="social-links" target="_blank" rel="noreferrer" href="https://linkedin.com/in/saradarce"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsx2OVghcTGcZcfkc5XuZcvS4vXP_W3gMYg&usqp=CAU" alt="linkedin"/></a>
          </span>
        </div>
        <p>{people[2].description}</p>
      </div>
        
    </div>
    );
  }
}

export default Card;