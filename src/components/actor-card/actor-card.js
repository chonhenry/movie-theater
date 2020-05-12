import React from "react";
import "./actor-card.scss";

class ActorCard extends React.Component {
  name = this.props.cast.name;
  character = this.props.cast.character;
  profile_path = `https://image.tmdb.org/t/p/w780/${this.props.cast.profile_path}`;

  render() {
    return (
      <div className="actor-card">
        <img
          className="profile-pic"
          src={this.profile_path}
          alt="profile-pic"
        />

        <div className="name">
          <strong>{this.name}</strong>
        </div>
        <div className="character">{this.character}</div>
      </div>
    );
  }
}

export default ActorCard;
