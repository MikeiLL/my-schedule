import React from "react";

class AddCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return <form onSubmit={e => {
        e.preventDefault();
        this.props.addcountry(this.state.name);
        this.setState({name: ""});
      }
    }>
      <label>Add Country: <input type="text" value={this.state.name} onChange={e => this.setState({name: e.currentTarget.value})} />
      </label>
      <button>Submit</button>
    </form>
  }
}

export default AddCountry;
