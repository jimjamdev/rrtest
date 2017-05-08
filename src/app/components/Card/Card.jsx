// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const CardStyle = styled.aside`
  display: flex;
  font-size: inherit;
  padding: 1rem;
  margin: 0 0 .5rem 0;
  border-radius: .2rem;
  background:  ${( { theme } ) => theme.widget.background };
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  
  position: fixed;
  top: 0; left: 0; bottom: 0;
  @media(min-width: 640px) {
    position: relative;
  }
`;


const Card = (props) => {
    return (
        <CardStyle {...props}>
            {props.children}
        </CardStyle>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
};

Card.defaultProps = {
    height: '3.3rem'
}

export default Card;