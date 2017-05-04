// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const CardStyle = styled.aside`
  display: flex;
  align-items: center;
  color: ${( { textColor, theme } ) => theme && textColor ? theme.color[ textColor ] : theme.base.textColor };
  font-size: inherit;
  min-height: ${( { height } ) => height };
  padding: 0 1rem;
  background: ${( { color, theme } ) => theme && color ? theme.color[ color ] : theme.appBar.background };
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
`;


const Card = (props) => {
    return (
        <CardStyle {...props}>
            {props.children}
        </CardStyle>
    );
}

Card.propTypes = {
    textColor: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.string
};

Card.defaultProps = {
    height: '3.3rem'
}

export default Card;