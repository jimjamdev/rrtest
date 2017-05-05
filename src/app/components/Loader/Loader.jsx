// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes }  from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS

const rotation = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
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
const Spinner = styled.svg`
    animation: ${rotation} 1.4s linear infinite;
`

const Circle = styled.circle`
     stroke-dasharray: 187;
     stroke-dashoffset: 0;
     transform-origin: center;
     animation: ${turn} 1.4s ease-in-out infinite;
`


const Loader = (props) => {
    return (
        <Spinner width="65px" height="65px" viewBox="0 0 66 66" stroke="#e51c23;" xmlns="http://www.w3.org/2000/svg">
            <Circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></Circle>
        </Spinner>
    );
}

export default Loader;