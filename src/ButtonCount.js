import React, { Component } from 'react'
import './buttoncount.css'

export default class ButtonCount extends Component {

    state={
        // button:"",
        count:0,
    };
  clickCount=()=>{
     this.setState({
     count:this.state.count+1
         });

    }
    
    evenOdd=()=>{
        // console.log("d")
        if(this.state.count%2===0&& this.state.count!=0){
           var out="Buttton is clicked even number of times."
            return out;
        }
        else if(this.state.count%2!=0){
            var odd="Button is clicked odd number of times."
            return odd;   
        }
        else{
            var res="Button is clicked 0 number of times."
            return res;
        }
    }

  render() {
    return (
      <div className='button'>
        <button onClick={this.clickCount}>Clicked {this.state.count} times</button>
        <p >{this.evenOdd()}</p>
      </div>
    )
  }
}
