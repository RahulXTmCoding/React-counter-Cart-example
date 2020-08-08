import React, { Component } from 'react';

class Catagory
{
    constructor(id,value)
    {
        this.id=id;
        this.value=value;
    }
}
class Catagories extends Component {
    state = {  }
    constructor(probs)
    {
        super(probs);
        this.state={"catagories":[new Catagory(1,"Tshirts"),new Catagory(2,"Pants"),new Catagory(3,"Shirts")],
        products:[],
              };

        this.products={
           1:[{id:1,name:"roadster shirt"},{id:2,name:"roadster shirt2"},{id:3,name:"roadster shirt2"},{id:4,name:"roadster shirt4"}],
           2:[{id:1,name:"Pant1"},{id:2,name:"pant2"},{id:3,name:"Pant3"},{id:4,name:"pant4"}],
           3:[{id:1,name:"shirt1"},{id:2,name:"shirt2"},{id:3,name:"shirt3"},{id:4,name:"shirt4"}],
        }
    }


    listProducts(id)
    {
     this.setState({products:this.products[id]})

    }

     renderProducts()
     {
         if(this.state.products.length===0) return ;
         return (
            <ul>
            {this.state.products.map(prod=><li key={prod.id}>{prod.name}</li>)}
       </ul>
          );

     }

    render() { 
        return (  
            <div className='row'>
                <div className="col-xs-6 col-sm-6 col-md-6">
                <ul>
                    {this.state.catagories.map(catagory=><li key={catagory.id}><a className="btn btn-danger btn-sm" onClick={()=>this.listProducts(catagory.id)}>{catagory.value}</a></li>)}
                </ul>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6">
                   { this.renderProducts() }
                </div>

            </div>

                
        );
    }
}
 
export default Catagories;