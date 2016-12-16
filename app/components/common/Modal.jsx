

import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalStatic extends Component {
  close = () => this.setState({ open: false });

  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <Header icon='archive' content={this.props.title} />
        <Modal.Content>
          <p>{this.props.message}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.props.onClick}>
            <Icon name='checkmark' /> {this.props.buttonText}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
