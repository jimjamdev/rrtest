// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ImageStyle = styled.img`
    display: block;
    width: 100%;
    margin: 0 auto;
    ${( { rounded } ) => rounded ? 'border-radius: 50%' : '' };
`;


const Image = (props) => {
    return (
        <ImageStyle {...props} />
    );
}

Image.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.string,
    src: PropTypes.string
};

export default Image;