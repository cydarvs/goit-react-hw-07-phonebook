// new store.js using redux toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine your reducer
const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

// Create the persist config object 
const persistConfig = {
  key: 'root',
  storage,
  // You can specify which part of your state you want to persist here 
  whitelist: ['contacts'],
};


// Wrap your rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer );

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getGetDefaultMiddleware =>
  getGetDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

// Commented to use redux-persist
// export const store = configureStore({
//   reducer: {
//     contacts: contactsSlice.reducer,
//     filter: filterSlice.reducer,
//   },
//   // The middleware and devTools enhancer are automatically included by default, so you don't need to specify them.
// });



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

