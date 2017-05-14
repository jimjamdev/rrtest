import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, HashRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Actions } from 'jumpstate';

// UI IMPORTS

// COMPONENT IMPORTS


const AuthContainerStyle = styled.section`
   display: flex;
   flex-direction: column;
   background: white;
   box-shadow: ${( { theme } ) => theme.shadow.z2 };
`;

class AuthContainer extends Component {

    render() {
        return (
            <AuthContainerStyle>
                Auth
            </AuthContainerStyle>
        );
    }
}
export default AuthContainer