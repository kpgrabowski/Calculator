const initialState = {
  history: {
    id: '',
    scoreHistory: '',
    typeHistory: '',
  }
};


const historyPanel = (state = initialState, action) => {

  switch(action.type) {
    case 'ADD_TO_HISTORY':
      const history = action.payload;
      return {...state, history};
    default:
      return state;
  }
};


export default historyPanel;