import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { List } from 'semantic-ui-react'

const style = {
  marginRight: 20,
};

class AppDrawerContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }



  handleDeleteContact(id) {
   console.log('delete the contact with this id:' , id)
  }

  render() {
    return (
      <div>
          <div>
              <List>
                <List.Item>
                  <List.Icon name='user circle' />
                  <List.Content>{this.props.contact.name}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='travel' />
                  <List.Content>{this.props.contact.role}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                    <a href={this.props.contact.email}>{this.props.contact.email}</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='phone' />
                  <List.Content>{this.props.contact.phone}</List.Content>
                </List.Item>
              </List> <br />
          </div>
      </div>
    );
  }
}

export default AppDrawerContactItem;
