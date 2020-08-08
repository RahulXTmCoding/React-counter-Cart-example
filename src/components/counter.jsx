import React, { Component } from 'react';

class Counter extends Component {
    
constructor(probs){
     super(probs)
     this.probs=probs;
    this.state={
        id:this.props.id,
        count:this.props.value,
    }
    this.handleIncrement=this.handleIncrement.bind(this);
    this.handleDecrement=this.handleDecrement.bind(this);

}

    handleIncrement(event)
    {
        this.setState(state=>({
            count:state.count+1,
        }))


    }

    handleDecrement(event)
    {
        if (this.state.count===0) return; 
        this.setState(state=>({
            count:state.count-1,
        }))


    }

    render() { 
        return (
        <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={()=>this.handleIncrement({id:this.state.id})} >+</button>
        <button className="btn btn-secondary btn-sm" onClick={()=>this.handleDecrement({id:this.state.id})} >-</button>
        <button className="btn btn-warning btn-sm" onClick={()=>this.props.deleteHandler(this.state.id)} >Delete</button>
        </div>
        );
    }

    
    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount()
    {
        return this.state.count===0 ? "Zero":this.state.count;
    }
}
 
export default Counter;