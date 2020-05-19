import React, { Component} from 'react';

import './AddPerson.css';

class  AddPerson extends Component{
    state= {
        name:'',
        age:''
    }
    nameHandle = (nameParam)=>(
        this.setState({name:nameParam})
    )
    ageHandle = (ageParam)=>(
        this.setState({age:ageParam})
    )

    render(){
        return (
         <div className="AddPerson">
            <input type="text" placeholder="Name" onChange={ (event)=>this.nameHandle(event.target.value)} value={this.state.name} />
            <input type="number" placeholder="Age" onChange={ (event)=>this.ageHandle(event.target.value)} value={this.state.age} />
    
            <button onClick={()=>this.props.personAdded(this.state.name,this.state.age)}>Add Person</button>
        </div>
        );
    }
} 

export default AddPerson;