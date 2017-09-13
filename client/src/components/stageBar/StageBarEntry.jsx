import React from 'react';
import { Icon } from 'semantic-ui-react'
import styles from '../../../styles/stageBar.css';

const StageBarEntry = (props) => {
  let style = {
    'position': 'relative',
    'color': props.stage.textColor,
    'background': props.stage.backgroundColor,
    'flex': `${props.flexSize}`
  };
  if(props.stage.name === 'Denied') {
    style.flex = 1;
  }

  return (
    <li style={style}
    >
      <div className={styles.settings}>
        <Icon
          onClick={() => {props.openSettings(props.entryPosition)}}
          link name='setting'
        />
      </div>
      {props.count}<br/>{props.stage.name}
    </li>
  );
};
export default StageBarEntry;
