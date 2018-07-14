import * as actionType from '../store/actions';

const initialState ={
    persons: []
}


const reducer =(state = initialState, action) =>{

    console.log(action);


    switch(action.type){
        case actionType.ADD_PERSON:
            return {
                ...state,                
                persons: state.persons.concat(action.person)
            }
            break; 
        case actionType.DELETE_PERSON:
        return {
            ...state,
            persons: state.persons.filter(person => person.id !== action.id)
        }
        break; 

    }
    
    return state;
}



export default reducer;