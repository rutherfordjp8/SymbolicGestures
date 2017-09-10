import React from 'react';

const AppDrawerHistoryItem = (props) => {
  return (
    <div >
      { props.history.created_at.slice(0,10) + ':  ' + props.history.event }
    </div>
  );
};

// class AppDrawerHistoryItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   render() {
//     return (
//       <div>
//         <p>{this.props.history.created_at.slice(0,10) + ':    ' + this.props.history.event }</p>
//       </div>
//     );
//   }
// }

export default AppDrawerHistoryItem;
