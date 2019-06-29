import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import { getSmurfs } from '../actions'

const App = props => {
  const fetchSmurfs = event => {
    event.preventdefault();
    props.getSmurfs();

  };
  return (
    <div>
      <h2>Something witty about Smurfs</h2>
      <div>
        
      </div>
    </div>
  )
}
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


export default App;
