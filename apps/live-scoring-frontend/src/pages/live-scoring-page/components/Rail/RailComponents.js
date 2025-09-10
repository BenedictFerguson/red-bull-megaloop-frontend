import styled from "styled-components";

const RailContainer = styled.div`
    width: 100%;

    .splide__list {
        max-width: 1600px;
    }

    .splide__slide {
        min-width: 421px;
        @media only screen and (max-width: 500px) {
          min-width: calc(100% - 52px) !important;
        }
    }

    .splide__track.splide__track--slide {
        //padding-left: 16px !important;
        //padding-right: 16px !important;
        //
        //@media only screen and (min-width: 650px) {
        //    padding-left: 40px !important;
        //    padding-right: 40px !important;
        //}
        //
        //@media only screen and (min-width: 1000px) {
        //    padding-left: 64px !important;
        //    padding-right: 64px !important;
        //}
        //
        //@media only screen and (min-width: 1600px) {
        //    padding-left: calc(-736px + 50%) !important;
        //    padding-right: calc(-736px + 50%) !important;
        //}
    }

    .splide__arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 64px;
        opacity: 1;
        transition: opacity 400ms cubic-bezier(0.35, 0, 0, 1),
        background-color 400ms cubic-bezier(0.35, 0, 0, 1);
        cursor: pointer;
        background-color: #D9D9D9;
        box-shadow: 0 16px 16px 0 rgba(0, 30, 60, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        outline: none;
        border: none;
  }

    .splide__arrow.splide__arrow--prev {
        left: 0;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .splide__arrow.splide__arrow--next {
        right: 0;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .splide__arrow:disabled {
        display: none;
    }
`;

export { RailContainer };
