import * as actionsType from '../actions/actions'

const inicialState = {
    persons:[]
}



const reducer = (state = inicialState ,action) => {

    switch (action.type){
        case actionsType.PERSONADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,// 'Max',
                age: action.age //Math.floor( Math.random() * 40 )
            }
            console.log( action.name, action.age);
            return{
               // persons:[...state.persons, newPerson ]
                persons:state.persons.concat(newPerson)
            };

        case actionsType.PERSONDELETE :
            return{
                persons: state.persons.filter(person => person.id !== action.id)
            } ;

    }

    return state;
     
}

export default reducer;