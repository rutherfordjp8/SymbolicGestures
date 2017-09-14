import React from 'react';
import styles from '../../../styles/stageBar.css';

const MiniStageBarEntry = (props) => {
  let style = {
    'color': props.stage.textColor,
    'background': props.stage.backgroundColor,
  };
  return (
    <li style={style}>
      {props.stage.name}
    </li>
  );
};
export default MiniStageBarEntry;
