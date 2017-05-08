// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ContentStyle = styled.main`
    display: block;
    transform: translateX(${( { leftOpen } ) => leftOpen ? '200px' : '0' });
    width: calc(100% - ${( { leftOpen } ) => leftOpen ? '200px' : '0' });
    transition: .3s ease-in-out;
`;


const AppContent = (props) => {
    return (
        <ContentStyle {...props}>
            {props.children}
        </ContentStyle>
    );
}

AppContent.propTypes = {
    leftOpen: PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};


export default AppContent;