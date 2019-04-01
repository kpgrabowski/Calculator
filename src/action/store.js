import { createStore } from 'redux';
import historyPanel from './historyPanel';

const store = createStore(historyPanel,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;