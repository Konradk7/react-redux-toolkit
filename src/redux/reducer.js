

const defaultState = {
    todos: [],
    example: { isChanged: false},
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODOS_ACTIONS_TYPES.ADD:
            return {...state, todos: [...state.todos, action.payload]};
        case TODOS_ACTIONS_TYPES.DELETE:
            const filteredTodos = state.todos.filter(
                ({id}) => id !== action.payload)
            ;
            return {...state, todos: filteredTodos };
        case TODOS_ACTIONS_TYPES.UPDATE:
            const todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        message: action.payload.message
                    };
                }
                return todo;
            })
            return {...state, todos };
        case TODOS_ACTIONS_TYPES.REMOVE_ALL:
            return {...state, todos: []};
        default:
            return state;
    }

}