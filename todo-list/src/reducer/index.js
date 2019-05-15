import { ADD_TODO, TOGGLE_TRUE } from '../actions/index';




const initialState = {
    todoList: [
        {
            value: 'Butter my buscuit',
            completed: false, 
            id: 256320375032
        },
        {
            value: 'Run a marathon',
            completed: false, 
            id: 2899079202309
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, {
                    value: action.payload,
                    completed: false, 
                    id: Date.now()
                }]
            }
        case TOGGLE_TRUE:
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        default:
            return state
    }
}

export default reducer;