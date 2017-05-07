// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ListItemStyle = styled.li`
  margin:0;
  padding:.5rem;
  list-style: none;
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  background: ${( { theme } ) => theme.widget.background };
`;


const ListItem = (props) => {
    return (
        <ListItemStyle>
            {props.children}
        </ListItemStyle>
    );
}

export default ListItem;