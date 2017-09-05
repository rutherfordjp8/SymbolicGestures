import React from 'react';
import AppDrawerInfo from './appDrawerInfo';
import AppDrawerNote from './appDrawerNote';
import AppDrawerHistory from './appDrawerHistory';
import AppDrawerContact from './appDrawerContact';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props.data)
  }

  render() {
    return (
      <div>
        <h1>AppDrawer</h1>
        <AppDrawerInfo application={this.props.application}/>
        <AppDrawerNote application={this.props.application}/>
        <AppDrawerContact application={this.props.application}/>
        <AppDrawerHistory application={this.props.application}/>
      </div>
    );
  }
}

export default AppDrawer
