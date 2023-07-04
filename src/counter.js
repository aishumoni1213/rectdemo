// class component 

import React from 'react'
import CounterDisplay from './counterDisplay'
class Counter extends React.Component
{
    constructor(props){
        super(props) // call the constructor of react.componennt class 
      // this.count=0;
      this.state={count:0}
    }
incerememt=()=>
{   if(this.state.count<10)
       this.setState({count:this.state.count+1}) ;
        console.log(this.state.count)
}
decrement=()=>{
    if(this.state.count>0)
    this.setState({count:this.state.count-1});
}
reset=()=>{
  this.setState({count:0})  
}
render()
{
    return(
        <>
        <button className='btn btn-primary' onClick={this.incerememt}>+</button>
        <CounterDisplay count={this.state.count} ></CounterDisplay>
        <button className='btn btn-primary' onClick={this.decrement}>-</button>
        <button className='btn btn-warning' onClick={this.reset}>reset</button>
        </>
    )
}

}

export default Counter