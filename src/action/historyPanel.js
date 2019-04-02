const initialState = {
  listOfHistory: [],
};

const historyPanel = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TO_HISTORY':
      const listOfHistory = [...state.listOfHistory, action.payload] ;
      return {...state, listOfHistory};
    default:
      return state;
  }
};

export default historyPanel;