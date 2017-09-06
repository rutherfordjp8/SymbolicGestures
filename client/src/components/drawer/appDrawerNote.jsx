import React from 'react';
import AppDrawerNoteItem from './appDrawerNoteItem.jsx';

class AppDrawerNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>AppDrawerNote</h2>
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
