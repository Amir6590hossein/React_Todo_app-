import React, { Component } from 'react'

export default class Create extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.insert} />
        <button onClick={this.props.done}>Create</button>
      </div>
    );
  }
}
