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
`;


const List = (props) => {
    return (
        <ListStyle>
            {props.children}
        </ListStyle>
    );
}

export default List;