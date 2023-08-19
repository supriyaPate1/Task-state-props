import React, { Component } from 'react'
import './countdown.css'
export default class CountDownClock extends Component {
     state={
          date:new Date(),
          hr:new Date().getHours(),
          min:new Date().getMinutes(), 
          sec:new Date().getSeconds(), 
        };

    countDown=()=>{
        this.setState({
            sec:this.state.sec,
            min:this.state.min,
            hr:this.state.hr,
        });
    }
              
    
    checktime=()=>{
        let sec1=this.state.sec
        let min1=this.state.min
        let hr1=this.state.hr
        setInterval(()=>{
            sec1--
        if(sec1 <0){
            min1--;
            sec1=0;
        }
        if(min1 < 0){
            hr1--;
            min1 =0;
        }
        // console.log(sec1+ " "+min1+" "+ hr1);
        this.setState({
            sec:sec1,
            min:min1,
            hr:hr1
        }

        )
        
  
    },1000)}
  
    render(){
      
    return (
      <div className='countD'>
        
         <p>{this.state.date.toLocaleTimeString()}</p>
         <button onClick={this.checktime}> Click me to start CountDown</button>
         <h1>{(this.state.hr<10)?"0"+this.state.hr:this.state.hr}:{(this.state.min<10)?"0"+this.state.min:this.state.min}:{(this.state.sec<10)?"0"+this.state.sec:this.state.sec}</h1>
         
      </div>
      )
    }
}



