import React, { Component } from 'react/lib/React';
import PropTypes from 'prop-types';
import styled from 'styled-components';
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 UI IMPORTS
 -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
import DropDownContent from './dropdown-content';

const DropDownMenuStyle = styled.aside`
   position: relative;
   display: inline-block;
`;

/**
 * Generate a dropdown menu
 */
class DropDownMenu extends Component {

    /**
     * Set our component state
     */
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    /**
     * Toggle our dropdown content
     */
    toggleActive() {
        this.setState({
            isActive: !this.state.isActive
        });
    }
    /**
     * Render our dropdown menu
     */
    render() {
        const { children, content } = this.props;
        return (
            <DropDownMenuStyle {...this.props} onClick={this.toggleActive.bind(this)} >
                {children}
                <DropDownContent active={this.state.isActive}>{content}</DropDownContent>
            </DropDownMenuStyle>
        );
    }
}

DropDownMenu.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node
    ])
};

export default DropDownMenu;
