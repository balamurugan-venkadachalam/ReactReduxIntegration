import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux';
import * as actionType from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler(name, age){
        console.log('Name : ', name, ' Age : ', age);
        const newPerson = {
            id: Math.random(), 
            name: name,
            age: age
        }
        return newPerson;
      //  this.setState( ( prevState ) => {
      //      return { persons: prevState.persons.concat(newPerson)}
      //  } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>

                <AddPerson personAdded={(name, age) => this.props.onAddPerson( this.personAddedHandler(name, age))} />
                {this.props.pers.map(person => (
                    
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        pers: state.persons,
    }
};

const mapDispatchToPros = (dispatch) => {
    return {
        onAddPerson: (person) => dispatch({type: actionType.ADD_PERSON, person: person} ),
        onDeletePerson: (id) => dispatch({type: actionType.DELETE_PERSON, id: id})
    }

}


export default connect(mapStateToProps, mapDispatchToPros)(Persons);