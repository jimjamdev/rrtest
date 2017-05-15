// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ListStyle = styled.ul`
  margin:0;
  padding:0;
  list-style: none;
  background: transparent;
`;


const List = (props) => {
    return (
        <ListStyle {...props} className="List">
            {props.children}
        </ListStyle>
    );
}

List.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default List;