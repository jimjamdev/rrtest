import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes }  from 'styled-components';

const rotate = keyframes`
   100% {
        transform: rotate(360deg);
    }
`
const dash = keyframes`
 0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
`


const smallloadercolors = keyframes`
100%,
    0% {
        stroke: #1b79d1;
    }
    40% {
        stroke: #1bd19a;
    }
    66% {
        stroke: #ff9000;
    }
    80%,
    90% {
        stroke: #e01616;
    }
`
const Spinner = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    width: 20px;
    height: 20px;
    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`
const Circle = styled.svg`
    animation: ${rotate} 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`
const Path = styled.circle`
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke: ${( { color, theme } ) => theme && color ? theme.color[ color ] : 'red' };
    animation: ${dash} 1.5s ease-in-out infinite, ${( { color, theme } ) => theme && color ? '' : `${smallloadercolors} 6s ease-in-out infinite` };
    stroke-linecap: round;
`


class Loader extends Component {

    getLoaderStyle() {
        const radius = this.props.radius || 50;
        return {
            height: radius+"px",
            width: radius+"px"
        };
    }

    getStrokeWidth() {
        const strokeWidth = this.props.strokeWidth || 4;
        return strokeWidth;
    }

    render() {

        return (
            <Spinner style={this.getLoaderStyle()}>
                <Circle viewBox="25 25 50 50">
                    <Path cx="50" cy="50" fill="none" r="20" strokeMiterlimit="10" strokeWidth={this.getStrokeWidth()}></Path>
                </Circle>
            </Spinner>
        );
    }
}

Loader.propTypes = {
    radius: PropTypes.string,
    strokeWidth: PropTypes.string,
    color: PropTypes.string,
};

export default Loader;