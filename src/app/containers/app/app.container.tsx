import * as React from 'react';
import { toggleMenu } from './app.actions';

class AppContainer extends React.Component<{}, any> {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
       console.log('Clicked');
    };

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Test</h1>
         <button onClick={this.handleClick}>toggle</button>
         <main>
             {this.props.children}
         </main>
      </div>);
  }
}

const mapStateToProps = (state) => {
    return {
        //app: AppReducer(state.app)
    }
};

export default AppContainer;