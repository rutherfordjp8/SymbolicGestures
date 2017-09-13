import React from 'react';
import StageBarEntry from './StageBarEntry.jsx';
import styles from '../../../styles/stageBar.css';

const StageBarList = (props) => {


  return (
    <div className={styles.stageBar}>
      <ul className={styles.arrows}>
        {props.stages.map((stage, key) => {
          let stageCount = props.stagesCount[stage.name] || 0,
              flexSize = stageCount > 3 ? 3 : stageCount;
          if (stageCount < 1) {flexSize = 1};
          
          return <StageBarEntry
                  stage={stage}
                  count={stageCount}
                  flexSize={flexSize}
                  key={key}
                  entryPosition={key}
                  openSettings={props.openSettings}
                />;
        })}
        {/*}<li className={styles.addStage} onClick={props.addNewStage}>
          Add Stage<br/>+
        </li>*/}
      </ul>
    </div>
  );
};
export default StageBarList;
