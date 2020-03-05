import React, {Component} from 'react';

class Score extends Component {

  render() {
      const guesses = 10
    return (
      <div>Guesses left: {guesses}</div>
    );
  }
}

export default Score