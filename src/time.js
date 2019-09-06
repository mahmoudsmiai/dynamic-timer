import React, { Component } from 'react';
import Timer from './timer';


class Time extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timeMs:863560000
         }
         this.start=this.start.bind(this)
         this.reset=this.reset.bind(this)
        }
         start (){
             if(this.state.newinterval){
                 return
             }
            const interval=setInterval(() => {
                this.setState({
                    timeMs:this.state.timeMs+1000})

                 
             },
              1000)
              this.setState({
                  newinterval: interval
              })
            
         }
         reset (){
             clearInterval(this.state.interval)
                 this.setState({
                     timeMs:863560000

                 })
             
         }
            
            
    render() { 
        return <div>
            
                <Timer duration={this.state.timeMs} />
            
            <input type="button" value="Start"
                   onClick={this.start}/>
            <input type="button" value="Reset"
                   onClick={this.reset}/>
            </div>       
         
    }
}
 
export default Time;
