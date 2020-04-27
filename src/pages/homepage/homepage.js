import React from "react";
import BoxContainer from "../../components/box-container/box-container";
import Box from "../../components/box/box";
import MovieItem from "../../components/movie-item/movie-item";
import "./homepage.scss";

const Homepage = (props) => {
  return (
    <div className="homepage container">
      <BoxContainer>
        <Box linkTo="/">Latest</Box>
        <Box linkTo="/">Now Playing</Box>
        <Box linkTo="/">Top Rated</Box>
        <Box linkTo="/">Upcoming</Box>
      </BoxContainer>
      <h1>Now Playing</h1>
      <BoxContainer>
        <Box linkTo="/">Upcoming</Box>
        <Box linkTo="/">Upcoming</Box>
      </BoxContainer>
      <MovieItem movieItem={props.movieItem}>{props.movieItem}</MovieItem>
    </div>
  );
};

export default Homepage;
