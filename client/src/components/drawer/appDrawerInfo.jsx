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
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(event) {
    var key = event.target.id;
    var val = event.target.value;
    var obj  = {};
    obj[key] = val;
    this.setState(obj);
  }

  handleBlur(event) {
    var key = event.target.id;
    var val = event.target.value;
    var obj  = {};
    obj[key] = val;
    console.log('axios this:', this.props.application.id, obj)
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
        <h2>Application</h2>

        <TextField
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          id="company_name"
          value={this.state.company_name || ' '}
          hintText={this.state.company_name || ' '}
        />

        <TextField
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          id="created_at"
          value={this.state.created_at || ' '}
        />

        <TextField
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          id="job_title"
          value={this.state.job_title || ' '}
        />

        <TextField
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          id="stage"
          value={this.state.stage || ' '}
        />

        {/* <TextField
          onChange={this.handleChange}
          id="job_posting_link"
          value={this.props.application.job_posting_link}
        />

        <TextField
          onChange={this.handleChange}
          id="job_posting_source"
          value={this.props.application.job_posting_source}
        />

        <TextField
          onChange={this.handleChange}
          id="applied_at"
          value={this.props.application.applied_at}
        />

        <TextField
          onChange={this.handleChange}
          id="updated_at"
          value={this.props.application.updated_at}
        />

        <TextField
          onChange={this.handleChange}
          id="locaton"
          value={this.props.application.locaton}
        />

        <TextField
          onChange={this.handleChange}
          id="job_posting_to_pdf_link"
          value={this.props.application.job_posting_to_pdf_link}
        /> */}

     </div>
    );
  }
}

export default AppDrawerInfo;
