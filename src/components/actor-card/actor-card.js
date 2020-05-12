import React from "react";
import "./actor-card.scss";

class ActorCard extends React.Component {
  name = this.props.cast.name;
  character = this.props.cast.character;
  profile_path = `https://image.tmdb.org/t/p/w780/${this.props.cast.profile_path}`;

  render() {
    return (
      <div className="actor-card">
        {this.props.cast.profile_path !== null ? (
          <img
            className="profile-pic"
            src={this.profile_path}
            alt="profile-pic"
          />
        ) : (
          <img
            className="no-profile-pic"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile-pic"
          />
        )}
        <div className="name">{this.name}</div>

        <div className="character">{this.character}</div>
      </div>
    );
  }
}

export default ActorCard;
