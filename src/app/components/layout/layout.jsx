// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const LayoutStyle = styled.section`
  position: relative;
  min-height: 100%;
  z-index: 0;
`;


const Layout = (props) => {
    return (
        <LayoutStyle {...props} className="Layout">
            {props.children}
        </LayoutStyle>
    );
}

Layout.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

Layout.defaultProps = {
}

export default Layout;