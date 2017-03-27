import * as React from 'react';

import { TOGGLE_MENU } from './app.actions';

class AppContainer extends React.Component<{}, Object> {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>App</h1>
         <main>
             {this.props.children}
         </main>
      </div>);
  }
}

export default AppContainer;