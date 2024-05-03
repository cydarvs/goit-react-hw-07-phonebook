// src/redux/contactsSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        fetchingError(state){
            state.isLoading = false;
            state.contacts = action.payload;
        },
    },
  });

  export const { addContact, deleteContact } = contactsSlice.actions;
  
  /*

  addContact: {
            reducer(state, action){
                state.push(action.payload);
            },
            prepare({ name, number }){
                return { payload: { id: nanoid, name, number } };
            }
        },
        deleteContact (state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            if (index !== -1){
                state.splice(index , 1);
            }
        }

        */