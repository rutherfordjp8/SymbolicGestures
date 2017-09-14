import React from 'react';
import MiniStageBarList from './MiniStageBarList.jsx';

class MiniStageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStage: {'stage': {
                      'name': undefined,
                      'backgroundColor': '#2196F3',
                      'textColor': '#000'},
                    'index': 0},
    }

    //*******Function Bindings**********//

  }


  render() {
    return (
      <div className={styles.stageBar}>
        <StageBarList
          stages={this.props.stages}
        />
      </div>
    );
  };
}


export default MiniStageBar;
