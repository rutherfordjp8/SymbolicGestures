import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import AppDrawer from './drawer/appDrawer.jsx';

const seanStyleBox = require('./../../styles/seanStyleBox.css');

export default class MateUiRightDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const application = this.props.application || [];
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={'70%'} openSecondary={true} open={this.state.open} >
          <AppDrawer application={this.props.application}/>
          {/* <div> {application.createdAt} </div>
          <div> {application.companyName} </div>
          <div> {application.jobTitle} </div>
          <div> {application.stage} </div>
          <div> {application.jobPostingLink} </div>
          <div> {application.jobPostingSource} </div>
          <div> {application.appliedAt} </div>
          <div> {application.updatedAt} </div>
          <div> {application.locaton} </div>
          <div> {application.jobPostingToPdfLink} </div>
          <div>
            {application.notes.map((note) => {
              return (
                <p>{note.type + '////' + note.note }</p>
              );
            })}
          </div>
          <div>
            {application.histories.map((history) => {
              return (
                <p>{history.date + '////' + history.event }</p>
              );
            })}
          </div>
          <div>
            {application.contacts.map((contact) => {
              return (
                <p>
                  {
                    contact.name + '////'
                  + contact.role + '////'
                  + contact.email + '////'
                  + contact.phone + '////'
                  }
                </p>
              );
            })}
          </div> */}
        </Drawer>
      </div>
    );
  }
}
