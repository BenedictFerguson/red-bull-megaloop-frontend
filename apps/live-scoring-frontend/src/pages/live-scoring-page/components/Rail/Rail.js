import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import { RailContainer } from "./RailComponents";
import { CosmosIconChevronLeft, CosmosIconChevronRight } from '@cosmos/web-scoped/react';

const SPLIDE_OPTIONS = {
  width: "100%",
  type: "slide",
  gap: "24px",
  perPage: 3,
  perMove: 3,
  focus: 0,
  pagination: false,
  trimSpace: true,
  omitEnd: false,
  breakpoints: {
    1600: {
      perPage: 3,
      perMove: 3,
      gap: "24px",
    },
    1200: {
      perPage: 3,
      perMove: 3,
      gap: "24px",
    },
    1000: {
      perPage: 2,
      perMove: 2,
      gap: "20px",
    },
    650: {
      perPage: 1,
      perMove: 1,
      gap: "12px",
    },
  },
  lazyLoad: "nearby",
};

const Rail = ({
  railOptions,
  children,
}) => {
  const [overrideRailOpts, setOverrideRailOpts] = useState({});
  const splideRef = useRef(null);
  
  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.refresh();

      if (splideRef.current?.splide.options.perPage >= children.length) {
        setOverrideRailOpts({
          trimSpace: true,
        });
      }
    }
  }, [splideRef, children]);

  const railOpts = {
    ...SPLIDE_OPTIONS,
    ...railOptions,
    ...overrideRailOpts,
  };

  return (
    <RailContainer>
      <Splide hasTrack={false} options={railOpts} ref={splideRef}>
        <SplideTrack>{children}</SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <CosmosIconChevronLeft />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <CosmosIconChevronRight />
          </button>
        </div>
      </Splide>
    </RailContainer>
  );
};

Rail.propTypes = {
  railOptions: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Rail;
