
const initialState = [{
    id: 1,
    todo: 'Buy milk',
    done: false
}];

//// Do not use .push() when using reducer (When working on React). It can lead to errors
//// .push() modifes or mutates the object, it React the state is what has to be modifed

const todoReducer = ( state = initialState, action ) => {
    
    if ( action?.type === 'add' ) {           //// ? will let now the function to execute only if action exists
        return [ ...state, action.payload ];
    }
    
    return state;
};

let todos = todoReducer();


const newTodo = {
    id: 2,
    todo: 'Buy bread',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
}


todos = todoReducer( todos, addTodoAction );


console.log(todos);