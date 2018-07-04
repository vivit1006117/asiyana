import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import a from './partial';

import '../styles/style.scss';

class Main extends Component {
  constructor() {
    super();
    console.log("the value of a is ", a);
  }

  render() {
    return (
      <div>Hello Everybody</div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
