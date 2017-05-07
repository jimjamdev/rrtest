// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';
import Loader from '../Loader/Loader'
// UI IMPORTS

// STYLE IMPORTS
const ButtonStyle = styled.button`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: baseline;
  color: ${( { color, theme } ) => theme && color ? 'white' : theme.base.textColor };
  background:  ${( { color, theme } ) => theme && color ? theme.color[ color ] : 'none' };
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  border-radius: ${( { rounded } ) => rounded ? '500rem' : '.2rem' };
  margin: 0 .25rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 400;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
  transition: background .3s ease-in-out;
  &:hover {
       background: ${( { color, theme } ) => theme && color ? lighten(0.1, theme.color[ color ]) : 'none' };
   }
`;


const Button = (props) => {

    const { text, children, color, loading } = props;

    if (loading) {
        return (
            <ButtonStyle {...props}>
                <Loader radius="12" strokeWidth="3" color="white" />
            </ButtonStyle>
        )
    }

    return (
        <ButtonStyle {...props}>
            {text} {children}
        </ButtonStyle>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

Button.defaultProps = {
}

export default Button;