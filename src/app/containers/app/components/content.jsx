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
    open: PropTypes.boolean,
    children: PropTypes.string,
};

Content.defaultProps = {
    open: true
}

export default Content;