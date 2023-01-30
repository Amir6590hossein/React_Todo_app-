import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={this.props.edit} placeholder={this.props.name}/>
       <button onClick={this.props.editdone}>اعمال</button>
        </div>
    )
  }
}
