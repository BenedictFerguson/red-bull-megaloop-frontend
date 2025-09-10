import React from "react";
import PropTypes from "prop-types";
import { RailCardContainer } from "./RailCardComponents";
import { SplideSlide } from "@splidejs/react-splide";

const RailCard = ({ children }) => {
  return (
    <SplideSlide>
      <RailCardContainer>{children}</RailCardContainer>
    </SplideSlide>
  );
};

RailCard.propTypes = {
  children: PropTypes.any,
};

export default RailCard;
