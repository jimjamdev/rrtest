// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const MenuStyle = styled.div`
  display: block;
`;


const Menu = (props) => {
    return (
        <MenuStyle {...props}>
            {props.children}
        </MenuStyle>
    );
}

Menu.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default Menu;