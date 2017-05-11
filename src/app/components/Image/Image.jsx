// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ImageStyle = styled.img`
    display: block;
    ${( { responsive } ) => responsive ? 'width: 100%; height: auto;' : '' };
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
    responsive: PropTypes.bool,
    src: PropTypes.string
};

export default Image;