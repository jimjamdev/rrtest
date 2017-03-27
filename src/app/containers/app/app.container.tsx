import * as React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from './app.actions';

import { DatePicker, Button } from 'antd';

import './app.container.scss';

class AppContainer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        toggleMenu: React.PropTypes.string
    };

    handleClick() {
       console.log('Clicked');
       this.props.toggleMenu(true);
    };

  render() {
    return (
     <div style={{textAlign: 'center'}} className="app">
        <h1>Test</h1>
         <Button onClick={this.handleClick}>toggle</Button>
         <DatePicker />
         <main>
             {this.props.children}
         </main>
      </div>);
  }
}

const mapStateToProps = (state) => {
    return {
       /* menuOpen: toggleMenu(state.menuOpen)*/
    }
};

export default AppContainer;