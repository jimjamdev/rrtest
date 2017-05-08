// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const ListItemStyle = styled.li`
  display: flex;
  flex-grow: 1;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: middle;
  margin:0;
  padding:.5rem;
  list-style: none;
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  background: ${( { theme } ) => theme.widget.background };
`;


const ListItem = (props) => {
    return (
        <ListItemStyle {...props}>
            {props.children}
        </ListItemStyle>
    );
}

ListItem.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ])
};

export default ListItem;