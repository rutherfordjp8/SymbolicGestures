import React from 'react';

class AppDrawerNoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p> {this.props.note.type + ': ' + this.props.note.note } </p>
      </div>
    );
  }
}

export default AppDrawerNoteItem;
