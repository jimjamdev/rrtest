import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from './app.actions';

import { DatePicker } from 'antd';

class AppContainer extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static propTypes = {
        toggleMenu: PropTypes.string
    };

    handleClick() {
       console.log('Clicked');
       this.props.toggleMenu(true);
    };

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Test</h1>
         <button onClick={this.handleClick}>toggle</button>
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