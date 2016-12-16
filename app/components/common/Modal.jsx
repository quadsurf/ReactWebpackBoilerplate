

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
    let { open, onClose, titleIcon, title, message, onClick, buttonText } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <Header icon={titleIcon || 'announcement'} content={title} />
        <Modal.Content>
          {message}
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={onClick}>
            <Icon name='checkmark' /> {buttonText}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
