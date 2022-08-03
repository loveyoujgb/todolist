// Action Creator type
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    title: payload.title,
    content: payload.content,
  };
};
export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    id: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    id: payload,
  };
};

// initialState
const initialState = [];

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          content: action.content,
          done: false,
        },
      ];
    case DELETE_TODO:
      return state.filter((todolist) => todolist.id !== action.id);
    case UPDATE_TODO:
      return state.map((todolist) => {
        if (todolist.id === action.id) {
          todolist.done = !todolist.done;
        }
        return todolist;
      });
    default:
      return state;
  }
};

export default todos;
