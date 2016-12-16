

import React, { Component } from 'react';
import Form1 from 'Form1';
import Form1Message from 'Form1Message';
import Fetcher from 'Fetcher';
import ModalStatic from 'ModalStatic';
import { Button } from 'semantic-ui-react';

export default class Home extends Component {
  constructor(props){
    super(props);
    // this.setState = this.setState.bind(this);
    this.state = {
      isLoading: false,
      open: false,
      errorTitle: 'Oops, an error occured: ',
      errorMessage: undefined
    };
  }

  handleSearch(location){
    let self = this;
    this.setState({isLoading:true});

    Fetcher.getTemp(location)
      .then(
        (temp) => {
          self.setState({location,temp,isLoading:false});
          self.openModal();
        }
      )
      .catch(
        (e) => {
          self.setState({
            isLoading: false,
            errorMessage: e.message
          });
          console.log(e.message);
        }
      );
  }

  openModal(){
    this.setState({open:true});
  }

  renderMessage(){
    let {location,temp,isLoading} = this.state;

    if (isLoading) {
      return <h3>Fetching Weather...</h3>;
    } else if (temp && location) {
      return (
        <Form1Message
          location={location}
          temp={temp}
        />
      );
    }
  }

  render(){
    // ={(location) => this.handleSearch(location)}
    const { open } = this.state;
    close = () => this.setState({open:false});
    return (
      <div>
        <h1>
          Home Route
        </h1>
        <Form1 onSearch={this.handleSearch.bind(this)} />
        <ModalStatic
          title='The Weather Right Now!'
          titleIcon="rain" 
          message={this.renderMessage()}
          open={open}
          onClick={close}
          onClose={close}
          buttonText="Got It!"
        />
      </div>
    );
  }
}
