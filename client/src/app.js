import React from 'react';
import ReactDOM from 'react-dom';

// import TableAndDrawer from './components/TableAndDrawer.jsx';

// const fakeApplicationsGenerator = require('./fakeApplcationsGenerator.js');

// let fakeApplications = fakeApplicationsGenerator(15);

const seanStyleBox = require('./../styles/seanStyleBox.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // applications: fakeApplications
      applications: ''
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className={seanStyleBox.box_94per_3perMg} />

        {/* <div className="box_94per_3perMg"> */}
        <div className={seanStyleBox.box_94per_3perMg}>
          <div className={seanStyleBox.PatrickStatusBar}>
            <h3>Patrick Status Bar</h3>
          </div>
        </div>

        {/* <div className="box_94per_3perMg">
          <TableAndDrawer
            applications={this.state.applications}
          />
        </div> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));