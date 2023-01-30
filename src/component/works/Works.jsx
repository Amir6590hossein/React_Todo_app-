import React, { Component } from 'react'
import Edit from './Edit';

export default class Works extends Component {
  render() {
   let show=null;
   let check=null;
   let style="alert alert-danger";
   if (this.props.check){
    style="alert alert-success"

   }
   if (this.props.showeditb){
    show=  <Edit showedit={this.props.showeditf}
    edit={this.props.edit} editdone={this.props.editdone}
    name= {this.props.name}/>
   }
   else{show=null}
   if(this.props.check){
    check="Completed"
   }else{check="Not Completed"}
   
    return (
      <div className={style}>
        <h2>{`${this.props.name} `}</h2>
        <h2>{`Status:${check}`}   </h2>
       <form>
        <label>
            Completed 
            <input
              type="radio"
              value="T"
             checked={this.props.check}
              onChange={(event) => this.props.change(event, this.props.id)}
            />
            </label>
          

           <label>
            Not Completed
            <input
              type="radio"
              value="F"
              checked={!this.props.check}
             onChange={(event) => this.props.change(event, this.props.id)}
            /></label>
          
        </form>
        
     <span  className="badge bg-danger" > <button onClick={this.props.delete} className="fa fa-trash" aria-hidden="false"></button></span>
       <span className='badge bg-warning'> <button onClick={this.props.showedit} className='fa fa-pencil' aria-hidden="false">تغییر</button></span>
        {show}

        <hr />
       

      </div>
    );
  }
}
