// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ContentStyle = styled.article`
  min-height: 100%;
  overflow-y: auto;
  padding: 1rem;
`;


const Content = (props) => {
    return (
        <ContentStyle {...props} className="LayoutContent">
            {props.children}
        </ContentStyle>
    );
}

Content.propTypes = {
    padding: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default Content;