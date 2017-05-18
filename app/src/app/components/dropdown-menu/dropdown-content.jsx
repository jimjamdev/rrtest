import React from 'react/lib/React';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 UI IMPORTS
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


const DropDownContentStyle = styled.aside`
   position: absolute;
   width: 100px;
   display: block;
   padding: 1rem;
   background: ${( { theme } ) => theme.widget.background }
   box-shadow: ${( { theme } ) => theme.shadow.z2 }
   display: none;
   &.active {
        display: block;
   }
`;


const DropDownContent = ( props ) => {

    const { children, active } = props;

    return (

        <DropDownContentStyle {...props} className={active ? 'active' : ''}>
            {children}
        </DropDownContentStyle>

    );

};

/**
 * Define list of properties that we need to
 * have in this simple component
 */
DropDownContent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ]),
    active: PropTypes.bool
};

export default DropDownContent
