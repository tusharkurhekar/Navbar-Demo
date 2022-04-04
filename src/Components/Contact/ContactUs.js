import React from "react";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    return;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="inputFields">
            First Name:
            <input type="text" onChange={this.handleChange} />
          </label>
          <Space />
          <label className="inputFields">
            Last Name:
            <input type="text" onChange={this.handleChange} />
          </label>
          <Space />
          <label className="inputFields">
            Address:
            <input type="text" onChange={this.handleChange} />
          </label>
          <Space />
          <label className="inputFields">
            Email ID:
            <input type="text" onChange={this.handleChange} />
          </label>
          <Space />
          <label className="inputFields">
            Phone No:
            <input type="text" onChange={this.handleChange} />
          </label>
          <Space />
          <label className="inputFields">
            Select City:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Boston">Boston</option>
              <option value="Kearny">Kearny</option>
              <option value="Portland">Portland</option>
              <option value="San Francisco">San Francisco</option>
            </select>
            <Space />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
function Space(props) {
  return (
    <div>
      <br></br>
    </div>
  );
}

export default ContactUs;
