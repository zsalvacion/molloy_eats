import React from 'react';
import { Link } from 'react-router-dom';

class SampleMenu2 extends React.Component{

  render() {
      return (
        <div>
          <h1>Restaurant 2</h1>
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
          <li><Link to='/profile'>Back to profile</Link></li>
        </div>
         
      );
    }
}

export default SampleMenu2;