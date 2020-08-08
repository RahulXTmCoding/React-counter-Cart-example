import React, { Component } from 'react';
import Catagories from './Catagory'
import Counters from './counters'
class Body extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <div className="row">
                <div className="row col-xs-6 col-sm-6 col-md-6">
            <div className="col-xs-6 col-sm-6 col-md-6">
            <Catagories />
            </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
            <Counters />
            </div>
            </div>
            </React.Fragment>
          );
    }
}
 
export default Body;