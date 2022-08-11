import {v4} from 'uuid';

const addTodo = (message) => ({
    type: TODOS_ACTIONS_TYPES.ADD,
    payload: {id: v4(), message}
});

const deleteTodo = (id) => ({
    type: TODOS_ACTIONS_TYPES.DELETE,
    payload: id
});

const updateTodo = (id, message) => ({
    type: TODOS_ACTIONS_TYPES.UPDATE,
    payload: { id, message}
});

const removeAllTodos = () => ({
    type: TODOS_ACTIONS_TYPES.REMOVE_ALL
})

export default { addTodo, deleteTodo, updateTodo, removeAllTodos };
