import React from 'react';
import {render} from 'react-dom';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    alert('click this');
  }

  render() {
    return (
      <div>
        <h1> Hello world</h1>
        <input type="checkbox"/>
        <button onClick={this.click}> try this</button>
      </div>
    );
  }
}

render(<Root/>, document.getElementById('app'));
