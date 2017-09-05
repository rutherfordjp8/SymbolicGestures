import React from 'react';
import AppDrawerHistoryItem from './appDrawerHistoryItem';

class AppDrawerHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>AppDrawerHistory</h2>
        <AppDrawerHistoryItem application={this.props.application}/>
      </div>
    );
  }
}

export default AppDrawerHistory;
