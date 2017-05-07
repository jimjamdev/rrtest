// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ContentStyle = styled.main`
    flex: 1;
`;


const Content = (props) => {
    return (
        <ContentStyle {...props}>
            {props.children}
        </ContentStyle>
    );
}

Content.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

Content.defaultProps = {

}

export default Content;