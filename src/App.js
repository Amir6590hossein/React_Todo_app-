import React, { Component } from 'react'

import Allworks from './component/works/Allworks';
import Create from './component/works/Create';
export default class App extends Component {
  state = {
    works: [

    ],
    check: "a",
    create:false,
    newwork:"",
    edit:"",
    showedit:false
  };
  
  showeditf=()=>{
     this.setState({showedit:!this.state.showedit})
     console.log(this.state.showedit)
  }
  
  editdone=(id)=>{
    let copy=[...this.state.works]
    let index=copy.findIndex(p=>p.id===id)
    copy[index].name=this.state.edit
    this.setState({works:copy})
    this.setState({edit:""})
    console.log(copy)
    this.setState({showedit:!this.state.showedit})


 

  }

  edit=(event)=>{
    this.setState({edit:event.target.value})
    
    
  }
  delete=(id)=>{
    let wor = [...this.state.works];
    let filter=wor.filter(p=>p.id!==id)
    this.setState({works:filter})
    

  }
  


  
  change = ( event,id) => {
    let wo = [...this.state.works];
    const index = this.state.works.findIndex((p) => (p.id === id));
    const con=event.target.value
    console.log(con)

    switch (con) {
      case "T":
        wo[index].check = true;
        console.log("T")
        break;

      case "F":
        wo[index].check = false;
        console.log("F")
        
        break;

      default:
        break;
    }
    this.setState({ works: wo });
  };
  insert=(event)=>{
 this.setState({newwork:event.target.value})
// console.log(this.state.newwork)
  
  }
  done=()=>{
    let copyworks=[...this.state.works]
    let work={id:Math.floor(Math.random()*1000),name:this.state.newwork,check:false}
    copyworks.push(work)
    this.setState({works:copyworks})
    this.setState({newwork:""})
    /*console.log(work)

    console.log(copyworks)
   console.log(this.state.works)*/
  }




  complete = () => {
    this.setState({ check: "c" });
  };

  notcomplete = () => {
    this.setState({ check: "n" });
  };

  all = () => {
    this.setState({ check: "a" });
  };

  create=()=>{
    this.setState({create:!this.state.create})
  }

  render() {

    let result = null;
    let create=null;
    if(this.state.create){
     create=<Create insert={this.insert} done={this.done}/>
    }
    switch (this.state.check) {
      case "a":
        result = (
          <Allworks
            work={this.state.works}
            change={this.change}
            delete={this.delete}
            edit={this.edit}
            editdone={this.editdone}
            showedit={this.showeditf}
            showeditb={this.state.showedit}
            />
        );
        break;
      case "c":
        result = (
          <Allworks
            work={this.state.works.filter((p) => p.check === true)}
            change={this.change} delete={this.delete}
            edit={this.edit} editdone={this.editdone}
            showedit={this.showeditf}
            showeditb={this.state.showedit}

          />
        );

        break;

      case "n":
        result = (
          <Allworks
            work={this.state.works.filter((p) => p.check === false)}
            change={this.change} delete={this.delete}
            edit={this.edit} editdone={this.editdone}
            showedit={this.showeditf}
            showeditb={this.state.showedit}


          />
        );

        break;

      default:
        break;
    }

    return (
      <div style={{ textAlign: "center" }}>

 {/* <h1 className='badge bg-danger'>Amir</h1> */}
        {result}
        {create}
        <button  onClick={this.complete} className='fa fa-check' style={{background:"green"}}>تمام شده</button>
        <button onClick={this.notcomplete} className='fa fa-times'style={{background:"red"}}>تمام نشده</button>
        <button onClick={this.all} className="fa fa-list" > تمام کار ها</button>
        <button onClick={this.create} className='fa fa-plus-square' style={{background:"green"}}></button>
      </div>
    );
  }
}
    /*let copyworks=[...this.state.works]
    const index=copyworks.filter(p=>p.id==id)
    copyworks[index].name=name
    
    
    
    this.setState({works:copyworks})*/