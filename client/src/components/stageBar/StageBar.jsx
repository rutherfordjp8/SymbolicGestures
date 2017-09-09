import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import _ from 'lodash';
import StageBarList from './StageBarList.jsx';
import StageBarSettings from './StageBarSettings.jsx';
import styles from '../../../styles/stageBar.css';


class StageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stagesCount: {},
      settingsOpen: false,
      activeStage: {'stage': {
                      'name': undefined,
                      'backgroundColor': '#2196F3',
                      'textColor': '#000'},
                    'index': 0},
      activeStageBackup: {'stage': {
                      'name': undefined,
                      'backgroundColor': '#2196F3',
                      'textColor': '#000'},
                    'index': 0},
    }

    //*******Function Bindings**********//
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.addNewStage = this.addNewStage.bind(this);
    this.deleteStage = this.deleteStage.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.stageSettingsSubmit = this.stageSettingsSubmit.bind(this);
    this.stageSettingsCancel = this.stageSettingsCancel.bind(this);
  }

  addNewStage() {
    let currentStages = this.props.stages,
      newStage = [{
        backgroundColor:"#FFC107",
        name:"Applied",
        textColor:"black"
      }];

    this.props.onStagesChange(currentStages.concat(newStage));
  }

  deleteStage() {
    let currentStages = this.props.stages,
        index = this.state.activeStage.index;

    currentStages.splice(index, 1);
    this.props.onStagesChange(currentStages);
    this.handleClose();
  }


  handleNameChange(event) {
    let currentStages = this.props.stages,
        activeStage = this.state.activeStage,
        index = this.state.activeStage.index;

    activeStage.stage.name = event.target.value;
    this.setState({activeStage: activeStage});
  }

  handleBackgroundColorChange(event) {
    let currentStages = this.props.stages,
        activeStage = this.state.activeStage,
        index = this.state.activeStage.index;


    activeStage.stage.backgroundColor = event;

    this.setState({activeStage: activeStage});
  }

  handleTextColorChange(event) {
    let currentStages = this.props.stages,
        activeStage = this.state.activeStage,
        index = this.state.activeStage.index;


    activeStage.stage.textColor = event;

    this.setState({activeStage: activeStage});
  }

  stageSettingsSubmit() {
    let index = this.state.activeStage.index,
        currentStages = this.props.stages;
    currentStages[index] = this.state.activeStage.stage;
    this.props.onStagesChange(currentStages);
    this.setState({settingsOpen:false});
  }

  stageSettingsCancel() {
    let index = this.state.activeStage.index,
        currentStages = this.props.stages;
    currentStages[index] = this.state.activeStageBackup.stage;


    this.setState({activeStage: this.state.activeStageBackup});
    this.setState({settingsOpen:false});
  }

  handleOpen(index) {
    let currentStages = this.props.stages,
        copyStages = _.cloneDeep(currentStages);
    this.setState({
      activeStage: {
                    'stage': currentStages[index],
                    'index': index
                   },
      activeStageBackup: {
                          'stage': copyStages[index],
                          'index': index
                         },
      settingsOpen: true
    });
  };

  handleClose() {
    this.setState({settingsOpen: false});
  };

  render() {
    return (
      <div className={styles.stageBar}>
        <StageBarList
          stages={this.props.stages}
          stagesCount={this.props.stagesCount}
          addNewStage={this.addNewStage}
          openSettings={this.handleOpen}
        />
      <StageBarSettings
        open={this.state.settingsOpen}
        close={this.handleClose}
        activeStage={this.state.activeStage}
        handleNameChange={this.handleNameChange}
        handleBackgroundColorChange={this.handleBackgroundColorChange}
        handleTextColorChange={this.handleTextColorChange}
        submitStage={this.stageSettingsSubmit}
        cancelStage={this.stageSettingsCancel}
        deleteStage={this.deleteStage}
      />
      </div>
    );
  };
}


export default StageBar;
