// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes }  from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS

const rotation = keyframes`
   0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
`

const turn = keyframes`
 100%,
  0% {
    stroke: red;
  }
  40% {
    stroke: blue;
  }
  66% {
    stroke: green;
  }
  80%,
  90% {
    stroke: yellow;
  }
`
const LoaderBox = styled.div`
  .spinner {
       animation: #{rotation} 1.4s linear infinite;
   }
  .circle {
      stroke-dasharray: 187;
      stroke-dashoffset: 0;
      -webkit-transform-origin: center;
      -ms-transform-origin: center;
      transform-origin: center;
      -webkit-animation: turn 1.4s ease-in-out infinite;
      animation: #{turn} 1.4s ease-in-out infinite;
  }
  svg {
    stroke:#e51c23;
  }
`


const Loader = (props) => {
    return (
        <LoaderBox>
            <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
            </svg>
        </LoaderBox>
    );
}

export default Loader;