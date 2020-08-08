import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = {  
        Counters:[
            {id:1,value:0},
            {id:2,value:3},
            {id:3,value:0},
            {id:4,value:0},
            {id:5,value:5},
            {id:6,value:0},
        ]
    }

    deleteCounter=(id)=>{
        console.log(id);
        const ctrs=this.state.Counters.filter(counter=>(counter.id!==id));
        this.setState({Counters:ctrs});
        console.log(this.state);
    }

    render() { 
        return ( <div>
            {this.state.Counters.map(counter=><Counter key={counter.id} deleteHandler={this.deleteCounter} id={counter.id} value={counter.value}/>)}
        </div> );
    }
}
 
export default Counters;