import React, { Component } from 'react';
import {Footer} from 'react-bootstrap'

class Footers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer style={{ backgroundColor: 'black' }} className="footer fixed-bottom">

              <p className="text-center text-light">Copyright © 2021 ABC Electronics. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}
export default Footers;
