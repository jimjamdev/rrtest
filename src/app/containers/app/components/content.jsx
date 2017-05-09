// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ContentStyle = styled.main`
    display: block;
    transform: translateX(${( { theme, leftOpen } ) => leftOpen ? theme.navigation.width : '0px' });
    width: calc(100% - ${( { theme, leftOpen } ) => leftOpen ? theme.navigation.width : '0px' });
    transition: .3s linear;
    height: 100%;
`;


const AppContent = (props) => {
    return (
        <ContentStyle {...props}>
            {props.children}
        </ContentStyle>
    );
}

AppContent.propTypes = {
    rightOpen: PropTypes.bool,
    leftOpen: PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};


export default AppContent;