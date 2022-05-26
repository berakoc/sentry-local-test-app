const getTodoRequest = (id) => ({
    type: 'GET_TODO_REQUEST',
    payload: id,
});

const getTodoSuccess = (todo) => ({
    type: 'GET_TODO_SUCCESS',
    payload: todo,
});

const getTodoError = (error) => ({
    type: 'GET_TODO_FAILURE',
    payload: error,
});

export {
    getTodoRequest,
    getTodoSuccess,
    getTodoError,
}