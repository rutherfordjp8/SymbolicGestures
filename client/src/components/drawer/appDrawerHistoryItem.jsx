import React from 'react';

class AppDrawerHistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>{this.props.history.date + '    ' + this.props.history.event }</p>
      </div>
    );
  }
}

export default AppDrawerHistoryItem;
