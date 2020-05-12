import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./slider.scss";
import ActorCard from "../../components/actor-card/actor-card";

class Slider extends React.Component {
  renderCasts = () => {
    let casts_arr = this.props.casts
      .slice(0, 10)
      .map((c) => <ActorCard cast={c} key={c.id} />);

    casts_arr.push(
      <Link to="" className="more-actor">
        <strong>View More</strong>
      </Link>
    );

    return casts_arr;
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
  return {
    casts: state.crewsCasts.cast,
  };
};

export default connect(mapStateToProps)(Slider);
