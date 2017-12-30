import React from 'react';
import {render} from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello world</h1>
        <input type="checkbox"/>
      </div>
    );
  }
}

render(<Root/>, document.getElementById('app'));
