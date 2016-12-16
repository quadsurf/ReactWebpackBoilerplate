

import React, { Component } from 'react';
import ModalStatic from 'ModalStatic';
import { Button } from 'semantic-ui-react';

export default class Page2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  show(){
    this.setState({ open: true });
  }

  render(){
    const { open } = this.state;
    close = () => this.setState({open:false});
    return (
      <div>
        <div>
          <h1>
            Page 2 Route
          </h1>
        </div>
        <div>
          <Button onClick={() => this.show()}>Open Modal</Button>
        </div>
        <div>
          <ModalStatic
            title="Title"
            titleIcon="payment" 
            message="Message"
            open={open}
            onClick={close}
            onClose={close}
            buttonText="Got It!"
          />
        </div>
      </div>
    );
  }
}
