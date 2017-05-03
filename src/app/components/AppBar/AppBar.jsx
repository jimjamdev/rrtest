// LIBRARY IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// UI IMPORTS

// STYLE IMPORTS
const AppBarStyle = styled.header`
  display: flex;
  align-items: center;
  font-size: inherit;
  min-height: 3.8rem;
  padding: 0 .5rem;
  background: lightseagreen;
  box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
`;


class AppBar extends Component {

    render() {
        return (
            <AppBarStyle>
                <h1>Affectli</h1>
            </AppBarStyle>
        );
    }
}

AppBar.propTypes = {
    children: PropTypes.string
};

export default AppBar;