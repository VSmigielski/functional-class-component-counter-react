import React from "react";
import Card from "./UI/Card/Card";
 
class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            count :0
        };
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }
 
    render(){
        return (
            <Card>
                <div style={{margin:'50px'}}>
                    <h1 className="pt-4">Welcome to the Class Component </h1>
                    <h3 className="mb-4 mt-4">Counter App using Class <br/> Component : </h3>
                    <h2> {this.state.count}</h2> 
                    <button className="btn-info rounded pt-2 pb-2 ps-4 pe-4 mb-5 mt-1" onClick={this.increase}> Add</button>
 
                </div>
            </Card>
            
        )
    }
}
 
export default ClassComponent;