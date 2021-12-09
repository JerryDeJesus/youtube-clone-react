import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div id="team-container">
        <div className="card">
          <h2>Jerry DeJesus</h2>
          <div className="card-pic">
            <img
              src="https://avatars.githubusercontent.com/u/86433443?v=4"
              alt="JerryPic"
            />
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JerryDeJesus"
          >
            Jerry's GitHub
          </a>
          <p>
            chocolate tiramisu cheesecake fruitcake fruitcake halvah. Biscuit
            liquorice gummies gingerbread apple pie. Candy canes bonbon jujubes
            pastry danish jelly beans macaroon. Sesame snaps pie cake toffee
            tart cupcake toffee.
          </p>
        </div>

        <div className="card">
          <h2>Christina Loiacono</h2>
          <div className="card-pic">
            <img
              src="https://avatars.githubusercontent.com/u/65386414?v=4"
              alt="ChristinaPic"
            />
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/christina-ml"
          >
            Christina's GitHub
          </a>
          <p>
            {" "}
            chocolate tiramisu cheesecake fruitcake fruitcake halvah. Biscuit
            liquorice gummies gingerbread apple pie. Candy canes bonbon jujubes
            pastry danish jelly beans macaroon. Sesame snaps pie cake toffee
            tart cupcake toffee.{" "}
          </p>
        </div>

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
