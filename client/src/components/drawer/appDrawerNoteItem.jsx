import React from 'react';
import Paper from 'material-ui/Paper';

const stylePaper = {
  height: 200,
  width: 500,
  margin: 5,
  padding: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class AppDrawerNoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Paper style={stylePaper} zDepth={1}
          children={
            <p> {this.props.note.type + ': ' + this.props.note.note } </p>
          }
        />
      </div>
    );
  }
}

export default AppDrawerNoteItem;
