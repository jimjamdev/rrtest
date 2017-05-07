// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const LayoutStyle = styled.section`
  height: 100%;
`;


const Layout = (props) => {
    return (
        <LayoutStyle {...props}>
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