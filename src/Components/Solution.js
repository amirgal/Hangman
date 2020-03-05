import React, {Component} from 'react';

class Solution extends Component {

  render() {
      const spacesArray = ['_ ','_ ','_ ','_ ']
    return (
      <div>
          {spacesArray.map(s => <span>{s}</span>)}
          <div id="hint"><em>This is the Hint</em></div>
      </div>
    );
  }
}

export default Solution