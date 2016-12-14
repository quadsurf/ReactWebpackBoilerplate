

import React, { Component } from 'react';

export default class Form1 extends Component {
  onFormSubmit(ev){
    ev.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={(ev) => this.onFormSubmit(ev)}>
          <input type="text" ref="location" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
