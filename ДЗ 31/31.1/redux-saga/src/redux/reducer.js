import * as types from './actions';

const initialState = {
  items: [],
  loading: false
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TODOS_REQUEST:
      return { ...state, loading: true };

    case types.FETCH_SUCCESS:
      return { ...state, items: action.payload, loading: false };
      
    case types.ADD_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
      
    case types.DELETE_SUCCESS:
      return { ...state, items: state.items.filter(todo => todo.id !== action.payload) };
      
    case types.TOGGLE_SUCCESS:
      return {
        ...state,
        items: state.items.map(todo => 
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case types.EDIT_SUCCESS:
      return {
        ...state,
        items: state.items.map(todo => 
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        )
      };

    case types.CLEAR_SUCCESS:
      return { ...state, items: [] };

    default:
      return state;
  }
}