const initialState = {
  age: null,
  gender: null,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AGE_FILTER':
      return {
        ...state,
        age: action.payload,
      };
    case 'SET_GENDER_FILTER':
      return {
        ...state,
        gender: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;