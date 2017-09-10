import React from 'react';
import AppDrawerNoteItem from './AppDrawerNoteItem.jsx';

class AppDrawerNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.application.notes = this.props.application.notes || [];
  }

  render() {
    return (
      <div>
        <h2>Notes</h2>
        {this.props.application.notes.map((note,index) => {
          return (
            <AppDrawerNoteItem note={note} key={index}/>
          );
        })}
      </div>
    );
  }
}


export default AppDrawerNote;
