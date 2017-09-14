import React from 'react';
import MiniStageBarEntry from './MiniStageBarEntry.jsx';

const MiniStageBarList = (props) => {
  return (
    <div className={styles.stageBar}>
      <ul className={styles.arrows}>
        {props.stages.map((stage, key) => {
          return <StageBarEntry
                  stage={stage}
                  key={key}
                />;
        })}
      </ul>
    </div>
  );
};
export default MiniStageBarList;
