// src/redux/contactsSlice.js
import { createSlice } from "@reduxjs/toolkit";

// the initial state hard coded
const initialContactsState = {
    contacts: [],
    isLoading: false,
    error: null,
};


  export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
    reducers: {
        fetchingInProgress(state){
            state.isLoading = true;
        },
        fetchingSuccess(state, action){
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        fetchingError(state, action){
            state.isLoading = false;
            state.contacts = action.payload;
        },
    },
  });

  export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
