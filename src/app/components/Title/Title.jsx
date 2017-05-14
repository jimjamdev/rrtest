// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const TitleStyle = styled.h1`
  font-size: inherit;
  font-weight: 400;
`;


const Title = (props) => {
    return (
        <TitleStyle {...props}>
            {props.children}
        </TitleStyle>
    );
}

Title.propTypes = {
    as: PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

Title.defaultProps = {
    as: 'h1'
}

export default Title;