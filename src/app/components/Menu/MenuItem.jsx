// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const MenuItemStyle = styled.div`
  display: block;
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
  background: ${( { theme } ) => theme.widget.background };
`;


const MenuItem = (props) => {
    return (
        <MenuItemStyle {...props}>
            {props.children}
        </MenuItemStyle>
    );
}

export default MenuItem;