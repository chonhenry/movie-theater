import React from "react";
import { connect } from "react-redux";
import { toogleBackdrop } from "../../actions/index";
import "./backdrop.scss";

class Backdrop extends React.Component {
  render() {
    return <div className="backdrop" onClick={this.props.toogleBackdrop} />;
  }
}

const mapStateToProps = (state) => {
  return {
    backdrop: state.toggleBackdrop,
  };
};

export default connect(mapStateToProps, { toogleBackdrop })(Backdrop);
