import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p className="pt-3"></p>
        <footer style={{ backgroundColor: 'black' }} className="footer fixed-bottom">
          <div className="col py-2">
            <center>
              <span className="text-light">Copyright © 2021 ABC Electronics. All rights reserved.</span>
            </center>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
