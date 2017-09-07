import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorPicker from 'material-ui-color-picker'
import TextField from 'material-ui/TextField';

const StageBarSettings = (props) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={props.close}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={props.close}
    />,
  ];

  return (
    <div>
      <MuiThemeProvider>
        <Dialog
          title="Edit Stage"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={props.close}
          >
          <TextField
            id="Name"
            value={props.activeStage.stage.name}
            onChange={props.handleChange}
            floatingLabelText="Name"
          />
        <div>
          <ColorPicker
            defaultValue={props.activeStage.stage.backgroundColor}
            onChange={props.handleChange}
            floatingLabelText="Background Color"
            />

          <ColorPicker
            defaultValue={props.activeStage.stage.textColor}
            onChange={props.handleTextColorChange}
            floatingLabelText="Text Color"
            />
        </div>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
};

export default StageBarSettings;
