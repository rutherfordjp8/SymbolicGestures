import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, Segment, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { format } from 'date-fns';

import MateUiRightDrawer from './MateUiRightDrawer.jsx';

const generateEmptyApplicaton = () => {
  let currentDate = format(new Date(), 'YYYY-MM-DD-ddd-HH-MM-ss');
  let emptyApplication = {
    created_at: currentDate,
    company_name: '',
    job_title: '',
    stage: '',
    job_posting_link: '',
    job_posting_source: '',
    applied_at: '',
    updated_at: '',
    locaton: '',
    job_posting_to_pdf_link: '',
    notes: [],
    histories: [],
    contacts: [],
  };
  return emptyApplication;
};

export default class DrawerAndApplicationTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedApplication: this.props.applications[0] || [],
      isDrawerOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }

  handleClick(application) {
    // console.log(application);
    this.setState({ selectedApplication: application });
  }

  handleAddButtonClick() {
    let newApplications = [generateEmptyApplicaton()].concat(this.state.applications);
    this.setState({ applications: newApplications });
  }

  postEmptyApplicationToDB() {
    axios.post('/user', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const segmentStyle = { padding: 0 };
    const applications = this.props.applications || [];
    const stageNameToColorHash = this.props.stageNameToColorHash || {};
    return (<div onClick={this.closeDrawer} >
      {/* #00bcd4 */}
      {/* <Button color="vk" className="addApplicationButton" style={{ backgroundColor: '#00bcd4' }}> */}
      <Button color="vk" className="addApplicationButton">
        <Icon name="plus" /> Add Aplication
      </Button>

      <MuiThemeProvider>
        <MateUiRightDrawer
          application={this.state.selectedApplication}
          isDrawerOpen={this.state.isDrawerOpen}
          handleAddButtonClick={this.handleAddButtonClick}
        />
      </MuiThemeProvider>
      <Segment style={segmentStyle}>

        <Table singleLine selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Applied</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Job Title</Table.HeaderCell>
              <Table.HeaderCell>Stage</Table.HeaderCell>
              <Table.HeaderCell>Link</Table.HeaderCell>
              <Table.HeaderCell>Source</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {applications.map((application, idx) => {
              return (
                <Table.Row key={idx} onClick={() => (this.handleClick(application))}>
                  <Table.Cell>{application.created_at}</Table.Cell>
                  <Table.Cell>{application.company_name}</Table.Cell>
                  <Table.Cell>{application.job_title}</Table.Cell>
                  <Table.Cell
                    style={stageNameToColorHash[application.stage]}
                  >{application.stage}</Table.Cell>
                  <Table.Cell>{application.job_posting_link}</Table.Cell>
                  <Table.Cell>{application.job_posting_source}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>

      </Segment>
    </div>
    );
  }
}
