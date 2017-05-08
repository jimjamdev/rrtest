// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const MenuItemStyle = styled.div`
  display: flex;
  padding: .3rem;
  box-shadow: ${( { theme } ) => theme.shadow.z1 };
`;


const MenuItem = (props) => {
    return (
        <MenuItemStyle {...props}>
            {props.children}
        </MenuItemStyle>
    );
}

MenuItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default MenuItem;