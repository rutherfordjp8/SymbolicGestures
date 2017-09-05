import React from 'react';
import AppDrawerContactItem from './appDrawerContactItem.jsx'

class AppDrawerContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>AppDrawerContact</h2>
        <AppDrawerContactItem application={this.props.application}/>

      </div>
    );
  }
}

export default AppDrawerContact;
