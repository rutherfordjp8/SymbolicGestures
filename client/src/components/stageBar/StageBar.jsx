import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

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
                      'backgroundColor': '#2196F3'},
                    'index': 0},
    }

    //*******Function Bindings**********//
    this.countApplicationStages = this.countApplicationStages.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
  }

  componentWillReceiveProps() {
    this.countApplicationStages();
  }

  /**
   * Counts how many applications each stage has for
   * dynamic rendering of stage length.
   * @todo: Set both count and size of flex-grow
   */
  countApplicationStages() {
    let applications = this.props.applications,
        stages = this.props.stages,
        count = {};
    // console.log('Counting: ', applications);
    // Count number of each stage.
    for (let i = 0; i < applications.length; i++) {
      let stage = applications[i].stage;
      if(count[stage] && count[stage] < 6) {
        count[stage]++;
      } else {
        count[stage] = 1;
      }
    }
    // Set count state after counting.
    this.setState({
      stagesCount: count
    });
  }

  handleOpen(index) {
    this.setState({activeStage: {'stage': this.props.stages[index],
                                'index': index}})
    this.setState({settingsOpen: true});
  };

  handleClose() {
     this.setState({settingsOpen: false});
  };

  handleChange(event) {
    console.log(typeof event);
    let currentStages = this.props.stages,
        activeStage = this.state.activeStage,
        index = this.state.activeStage.index;
    // console.log('currentStages', currentStages, this.props.stages)
    if (typeof event !== 'string' && event.target.id === 'Name') {
      activeStage.stage.name = event.target.value;
      console.log(activeStage);
      this.setState({activeStage: activeStage});
    } else {
      activeStage.stage.backgroundColor = event;
      console.log('afterChange', activeStage);
      this.setState({activeStage: activeStage});
    }
  }

  handleTextColorChange(event) {

    let currentStages = this.props.stages,
        activeStage = this.state.activeStage,
        index = this.state.activeStage.index;
    // console.log('currentStages', currentStages, this.props.stages)

    activeStage.stage.textColor = event;

    this.setState({activeStage: activeStage});

  }

  render() {
    return (
      <div className={styles.stageBar}>
        <StageBarList
          stages={this.props.stages}
          stagesCount={this.props.stagesCount}
          addNewStage={this.props.addNewStage}
          openSettings={this.handleOpen}
        />
      <StageBarSettings
        open={this.state.settingsOpen}
        close={this.handleClose}
        activeStage={this.state.activeStage}
        handleChange={this.handleChange}
        handleTextColorChange={this.handleTextColorChange}
      />


      </div>
    )
  }
}


export default StageBar;
