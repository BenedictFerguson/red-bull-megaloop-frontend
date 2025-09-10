import styled from 'styled-components';

export const LiveScoringClassToggleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;

    @media only screen and (min-width: 650px) {
        justify-content: flex-end;
    }
    
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 1201px) {
        flex-direction: row;
    }
`;

export const LiveScoringClassToggleButton = styled.div`
    min-width: 224px;
    width: 100%;

    @media (min-width: 650px) {
        max-width: 264px;
    }

    .filter-toggle {
        width: 100%;
        position: relative;
        overflow: hidden;
        text-overflow: clip;
        z-index: 1;
        border-radius: 20px;
        height: 40px;
        background-color: rgba(227, 225, 225, 0.6);
    }

    .filter-toggle:hover {
        background-color: #e2e3e5;
    }

    .filter-toggle__slider {
        position: absolute;
        width: calc(50% - 4px);
        height: calc(40px - 8px);
        margin: 4px 4px 0;
        background-color: #ffffff;
        border-radius: 18px;
        transition: left 1s cubic-bezier(.35, 0, 0, 1), width .15s cubic-bezier(.35, 0, 0, 1), transform .15s cubic-bezier(.35, 0, 0, 1);
    }

    .filter-toggle--first-active .filter-toggle__slider {
        left: 0;
    }

    .filter-toggle--second-active .filter-toggle__slider {
        left: calc(50% - 4px);
    }

    .filter-toggle__options {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        height: 100%;
    }

    .filter-toggle__option {
        display: flex;
        flex: 1 0 1px;
        overflow: hidden;
        position: relative;
    }

    .filter-toggle__option-input {
        position: absolute;
        -moz-appearance: none;
        -webkit-appearance: none;
        opacity: 0;
        z-index: -1;
        outline: 0;
        margin: 0;
    }

    .filter-toggle__option:first-child .filter-toggle__option-label {
        margin-right: 0;
    }

    .filter-toggle__option-label {
        cursor: pointer;
        text-align: center;
        width: 100%;
        outline: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #4d4e51;
        box-sizing: border-box;
        justify-content: center;
        user-select: none;
    }
`;
