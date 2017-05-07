// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ContentStyle = styled.main`
    flex: 1;
`;


const AppContent = (props) => {
    return (
        <ContentStyle {...props}>
            {props.children}
        </ContentStyle>
    );
}

AppContent.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

AppContent.defaultProps = {

}

export default AppContent;