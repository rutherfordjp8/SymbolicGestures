import React from 'react';
import { Icon } from 'semantic-ui-react'
import styles from '../../../styles/stageBar.css';

const StageBarEntry = (props) => {
  let style = {
    'position': 'relative',
    'color': props.stage.textColor,
    'background': props.stage.backgroundColor,
    'flex': `${props.stage.count}`
  };

  let handleMouseOver = function(el) {
    if (el.target.firstChild.className) {
      el.target.firstChild.firstChild.style.visibility = 'visible';
    } else {
      el.target.firstChild.style.visibility = 'visible';
    }
    // el.target.style['flex-grow'] = style.flex + 1;

    // if (settingsName === 'stageBar') {
    //   el.target.firstChild.firstChild.style.visibility = 'visible';
    // } else {
    //   el.target.firstChild.style.visibility = 'visible';
    //   el.target.style['flex-grow'] = style.flex + 1;
    // }
    // el.target.firstChild.firstChild.style.display = 'block';
    // el.target.style.flex = style.flex + 1;
  }
  let handleMouseOut = function(el) {
    console.log('MO', el.target.parentNode.className.substring(0,8));
    if (el.target.parentNode.className.substring(0,8) === 'stageBar') {
      return;
    }
    if (el.target.firstChild.className.substring(0,8) === 'stageBar') {
      // el.target.firstChild.firstChild.style.visibility = 'hidden';
    }
    // el.target.firstChild.firstChild.style.display = 'none';
    // el.target.style.width = 'initial';

    // el.target.style.flex = style.flex;


  }
  return (
    <li style={style}
      onClick={props.handleOnClick}
      onChange={console.log('change')}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={styles.settings}>
        <Icon

          link name='setting'
          onClick={()=>{console.log('HelloSettings')}}
        />
      </div>
      {props.stage.count}<br/>{props.stage.name}
    </li>
  );
};
export default StageBarEntry;
