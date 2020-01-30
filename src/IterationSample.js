import React, { Component } from 'react';

class IterationSample extends Component {
  state = {
    names: ['강동원', '윤시후', '김경종', '정우성', '장동건'],
    name: []
  };
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleInsert = () => {
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    });
  };
  handleRemove = idx => {
    const { names } = this.state;
    this.setState({
      names: [...names.slice(0, idx), ...names.slice(idx + 1, names.length)]
    });
  };
  handleFiltering = idx => {
    const { names } = this.state;
    this.setState({
      names: names.filter((item, i) => i !== idx)
    });
  };
  render() {
    const nameList = this.state.names.map((name, idx) => (
      <li key={idx} onDoubleClick={() => this.handleFiltering(idx)}>
        {name}
      </li>
    ));
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample;
