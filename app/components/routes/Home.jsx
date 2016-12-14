

import React, { Component } from 'react';
import Form1 from 'Form1';
import Form1Message from 'Form1Message';
import Fetcher from 'Fetcher';

export default class Home extends Component {
  constructor(props){
    super(props);
    // this.setState = this.setState.bind(this);
    this.state = {
      isLoading: false
    };
  }

  handleSearch(location){
    let self = this;
    this.setState({isLoading:true});

    Fetcher.getTemp(location)
      .then(
        (temp) => {
          self.setState({location,temp,isLoading:false});
        }
      )
      .catch(
        (err) => {
          self.setState({
            isLoading: false
          });
          console.log(err);
        }
      );
  }

  renderMessage(){
    let {location,temp,isLoading} = this.state;

    if (isLoading) {
      return <h3>Fetching Weather</h3>;
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
    return (
      <div>
        <h1>
          Home Route
        </h1>
        <Form1 onSearch={this.handleSearch.bind(this)} />
        {this.renderMessage()}
      </div>
    );
  }
}
