import React, { Component } from 'react';

import { connect } from 'react-redux';
import { dispatch } from 'redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionsType from '../store/actions/actions'



class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.list.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = state =>{
    return {
         list: state.persons

    };
};

const mapDispatchToProps = dispatch =>{
    return {
         personAddedHandler: (name,age)=> dispatch({type:actionsType.PERSONADD,name:name, age:age}),
         personDeletedHandler: (value)=> dispatch({type:actionsType.PERSONDELETE,id:value})

    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Persons);


