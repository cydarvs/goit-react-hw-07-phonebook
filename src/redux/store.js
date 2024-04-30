// new store.js using redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  // The middleware and devTools enhancer are automatically included by default, so you don't need to specify them.
});



// REFACTOR store.js old code

/*
  
  import { createStore, combineReducers } from 'redux';         // import combine reducers
  import { devToolsEnhancer } from '@redux-devtools/extension'; // import the contact reducer
  import { contactsReducer } from '../redux/reducers';           // import the filter reducer
  import { filterReducer } from '../redux/reducers';

  // Combine reducers
  const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  });

  // Create a store extension to add developer tools
  const enhancer = devToolsEnhancer();
  export const store = createStore(rootReducer, enhancer);
*/

