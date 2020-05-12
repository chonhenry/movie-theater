import React from "react";
import { connect } from "react-redux";
import "./slider.scss";
import ActorCard from "../../components/actor-card/actor-card";

class Slider extends React.Component {
  renderCasts = () => {
    let casts_arr = this.props.casts;

    return this.props.casts
      .slice(0, 10)
      .map((c) => <ActorCard cast={c} key={c.id} />);
  };

  render() {
    return (
      <div className="slider">
        {this.props.casts ? this.renderCasts() : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // var casts;

  // if (state.crewsCasts.cast) {
  //   casts = state.crewsCasts.cast.map((c) => c);
  // }

  return {
    casts: state.crewsCasts.cast,
  };
};

export default connect(mapStateToProps)(Slider);
