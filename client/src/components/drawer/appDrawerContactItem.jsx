import React from 'react';

class AppDrawerContactItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {this.props.application.contacts.map((contact,index) => {
            return (
              <p key={index}>
                {
                  contact.name + '    '
                + contact.role + '    '
                + contact.email + '    '
                + contact.phone + '    '
                }
              </p>
            );
          })}
        </div>

      </div>
    );
  }
}

export default AppDrawerContactItem;
