//
//
// import React from 'react';
// import { Link,IndexLink } from 'react-router';
// // <div>
// //   <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Home</IndexLink> |
// //   <Link to="/page2" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Page 2</Link> |
// //   <Link to="/page3" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Page 3</Link>
// // </div>
// export default () => {
//   return (
//
//     <div className="ui menu">
//       <a className="item">Browse</a>
//       <a className="item">Submit</a>
//       <div className="right menu">
//         <a className="item">Sign Up</a>
//         <a className="item">Help</a>
//       </div>
//     </div>
//   );
// }


// <Menu inverted>
//   <Menu.Item header>
//     Neptune
//   </Menu.Item>
//
//   <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick.bind(this)}>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Dashboard</IndexLink>
//   </Menu.Item>
//
//   <Menu.Item name='videos' active={activeItem === 'videos'} onClick={this.handleItemClick.bind(this)}>
//     <Link to="/page2" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Video Catalogue</Link>
//   </Menu.Item>
//
//  <Menu.Menu position='right'>
//  <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick.bind(this)}>
//    <Link to="/page3" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Account</Link>
//  </Menu.Item>
//    <Menu.Item name='authStatus' active={activeItem === 'authStatus'} onClick={this.handleItemClick.bind(this)}>
//      Log In
//    </Menu.Item>
//  </Menu.Menu>
// </Menu>



import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toast: 'working',
      activeItem: 'dashboard',
      authStatus: 'Sign In'
    };
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name });
    console.log('Nav Menu Link Clicked:');
    console.log(name);
  }

  render() {
    const { activeItem } = this.state;
    //  className="customHeaderCSS"
    return (
      <div className="ui menu">
        <div className="item">Neptune</div>
        <IndexLink to="/" className="item" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Dashboard</IndexLink>
        <Link to="/page2" className="item" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Upload Video</Link>
        <Link to="/page3" className="item" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Video Catalogue</Link>
        <div className="right menu">
          <Link to="/page2" className="item" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Account</Link>
          <Link to="/page3" className="item" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Log In</Link>
        </div>
      </div>
    )
  }
}
