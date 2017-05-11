'use strict';

import React from 'react';
import classnames from 'classnames';
import Helpers from './mixins/helpers';
import styled from 'styled-components';

const ArrowStyle = styled.button`
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: red;
    z-index: 1;
    &.slick-prev {
        left: -5px;
    }
    &.slick-next {
        right: -5px;
    }
`;

export class PrevArrow extends React.Component {
  clickHandler(options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  }
  render() {
    var prevClasses = {'slick-arrow': true, 'slick-prev': true};
    var prevHandler = this.clickHandler.bind(this, {message: 'previous'});

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    var prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: classnames(prevClasses),
      style: {display: 'block'},
      onClick: prevHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var prevArrow;

    if (this.props.prevArrow) {
      prevArrow = React.cloneElement(this.props.prevArrow, { ...prevArrowProps, ...customProps });
    } else {
      prevArrow = <ArrowStyle key='0' type='button' {...prevArrowProps}> Previous</ArrowStyle>;
    }

    return prevArrow;
  }
}


export class NextArrow extends React.Component {
  clickHandler(options, e) {
    if (e) { e.preventDefault(); }
    this.props.clickHandler(options, e);
  }
  render() {
    var nextClasses = {'slick-arrow': true, 'slick-next': true};
    var nextHandler = this.clickHandler.bind(this, {message: 'next'});

    if (!Helpers.canGoNext(this.props)) {
      nextClasses['slick-disabled'] = true;
      nextHandler = null;
    }

    var nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: classnames(nextClasses),
      style: {display: 'block'},
      onClick: nextHandler
    };
    var customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    var nextArrow;

    if (this.props.nextArrow) {
      nextArrow = React.cloneElement(this.props.nextArrow, { ...nextArrowProps, ...customProps });
    } else {
      nextArrow = <ArrowStyle key='1' type='button' {...nextArrowProps}> Next</ArrowStyle>;
    }

    return nextArrow;
  }
}
