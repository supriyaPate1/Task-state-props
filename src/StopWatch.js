import React, { Component } from "react";
import './stopwatch.css'
export default class StopWatch extends Component {
  state = {
    hr: 0,
    min: 0,
    sec: 0,
    milisec: 0,
    startT:'',
    
  };
  
  start = () => {
    let mili1 = this.state.milisec;
    let sec1 = this.state.sec;
    let min1 = this.state.min;
    let hr1 = this.state.hr;
   let time= setInterval(() => {
      mili1+=1;
     if (mili1 === 100) {
      sec1++;
      mili1 = 0;
    }
      if (sec1 === 60) {
        min1++;
        sec1 = 0;
      }
      if (min1 === 60) {
        hr1++;
        min1 = 0;
      }
      this.setState({
        sec: sec1,
        min: min1,
        hr: hr1,
        milisec: mili1,
        startT:time,
      });
    },100);
  }
 stop=()=>{ 
  //alert("gfiu")
  clearInterval(this.state.startT);
 }
 resume=()=>{
 
  this.start();

 }
 reset=()=>{
 // alert("gfiu")
 this.stop();
  this.setState({
    hr: 0,
    min: 0,
    sec: 0,
    milisec: 0,
  })
 }

  render() {
    return (
      <div className="stop">
        {/* <h1>
          <span>{this.state.hr}</span>
          <span>{this.state.min}</span>
          <span>{this.state.sec}</span>
          <span>{this.state.milisec}</span>
        </h1> */}
        <h1>{(this.state.hr<10)?"0"+this.state.hr:this.state.hr}:{(this.state.min<10)?"0"+this.state.min:this.state.min}:{(this.state.sec<10)?"0"+this.state.sec:this.state.sec}:{(this.state.milisec<10)?"0"+this.state.milisec:this.state.milisec}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.resume}>Resume</button>
      </div>
    );
  }
}
