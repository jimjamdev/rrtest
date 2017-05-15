// LIBRARY IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const MenuHeaderStyle = styled.div`
  display: flex;
  padding: .3rem;
  border-bottom: solid 1px ${( { theme } ) => theme.base.borderColor };
`;


const MenuHeader = (props) => {
    return (
        <MenuHeaderStyle {...props}>
            {props.children}
        </MenuHeaderStyle>
    );
}

MenuHeader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default MenuHeader;