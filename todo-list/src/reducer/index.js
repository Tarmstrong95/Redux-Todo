import {ADD_TODO} from '../actions/index';




const initialState = {
    todoList: [
        {
            value: 'Butter my buscuit',
            completed: false
        },
        {
            value: 'Run a marathon',
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: 
        return {
            ...state,
            todoList: [...state.todoList, {
                value: action.payload,
                completed: false
            }]
        }
        default: 
        return state
    }
}

export default reducer;