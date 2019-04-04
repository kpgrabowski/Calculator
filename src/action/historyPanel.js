const initialState = {
  listOfHistory: [],
  listOfFavorite: [],
};

const historyPanel = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TO_HISTORY':
      const listOfHistory = [...state.listOfHistory, action.payload] ;
      return {...state, listOfHistory};
    case 'ADD_TO_FAVORITE':
      const listOfFavorite = [...state.listOfFavorite, action.payload] ;
      return {...state, listOfFavorite};
    default:
      return state;
  }
};

export default historyPanel;