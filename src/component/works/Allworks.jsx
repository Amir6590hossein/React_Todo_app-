import React, { Component } from 'react'
import Works from './Works'

export default class Allworks extends Component {
  render() {
    return (
      <div>
        {this.props.work.map((k) => (
          <Works
           key={k.id} 
           name={k.name}
            check={k.check}
            change={this.props.change}
            delete={()=>this.props.delete(k.id)}
            edit={this.props.edit} editdone={()=>this.props.editdone(k.id)}
            showedit={this.props.showedit}
            showeditb={this.props.showeditb}
            id={k.id}


          />
        ))}
      </div>
    );
  }
}
