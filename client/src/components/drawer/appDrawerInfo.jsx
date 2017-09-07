import React from 'react';
import TextField from 'material-ui/TextField';

class AppDrawerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      created_at: '',
      job_title: '',
      stage: '',
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
   console.log('drawerinfo event target',event.target);
   this.setState({});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      company_name: nextProps.application.company_name,
      created_at: nextProps.application.created_at,
      job_title: nextProps.application.job_title,
      stage: nextProps.application.stage,
    });
  }

  render() {
    return (
      <div>
        <h2>AppDrawerInfo</h2>

        <TextField
          onChange={this.handleChange}
          id="text-field-default"
          value={this.state.company_name}
        />

        <TextField
          id="text-field-default"
          value={this.state.created_at}
        />

        <TextField
          id="text-field-default"
          value={this.state.company_name}
        />

        <TextField
          id="text-field-default"
          value={this.state.job_title}
        />

        <TextField
          id="text-field-default"
          value={this.state.stage}
        />

        {/* <TextField
          id="text-field-default"
          value={this.props.application.job_posting_link}
        />

        <TextField
          id="text-field-default"
          value={this.props.application.job_posting_source}
        />

        <TextField
          id="text-field-default"
          value={this.props.application.applied_at}
        />

        <TextField
          id="text-field-default"
          value={this.props.application.updated_at}
        />

        <TextField
          id="text-field-default"
          value={this.props.application.locaton}
        />

        <TextField
          id="text-field-default"
          value={this.props.application.job_posting_to_pdf_link}
        /> */}

     </div>
    );
  }
}

export default AppDrawerInfo;
