import React, { Component } from 'react'
import './counter.css'
export default class 
 extends Component {
    state={
        // button:"",
        count:0,
    };
  clickInc=()=>{
     this.setState({
     count:this.state.count+1
         });

    }
    clickDec=()=>{
        this.setState({
        count:this.state.count-1
            });
   
       }
       reset=()=>{
        this.setState({
            count:0
                });
       
       }

  render() {
    return (
      <div className='counter'>
             <h1>COUNTER</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.clickInc}>+</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.clickDec}>-</button>
           
      </div>
    )
  }
}
