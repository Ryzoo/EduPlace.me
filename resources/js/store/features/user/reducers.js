// import { asyncActions } from './asyncActions';

// Definiujemy synchroniczną obsługę akcji
import { asyncActions } from './asyncActions';

export const reducers = {
  todoAdded(state, action) {
    // ✅ This "mutating" code is okay inside of createSlice!
    state.push(action.payload);
  },
  // todoToggled(state, action) {
  //   const todo = state.find((t) => t.id === action.payload);
  //   todo.completed = !todo.completed;
  // },
  // todosLoading(state) {
  //   return {
  //     ...state,
  //     status: 'loading',
  //   };
  // },
};

// Definiujemy asynchroniczną obsługę akcji
export const extraReducers = (builder) => {
  builder.addCase(asyncActions.saveNewTodo.pending, (state) => {
    state.status = 'loading';
  });
  // .addCase(asyncActions.saveNewTodo.fulfilled, (state, action) => {
  //   state.status = 'idle';
  // });
};
