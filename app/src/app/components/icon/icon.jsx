// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const IconStyle = styled.i`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: .7rem;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
`;


const Icon = (props) => {
    return (
        <IconStyle {...props}>
            {props.name}
        </IconStyle>
    );
}

Icon.propTypes = {
    name: React.PropTypes.string
};

export default Icon;