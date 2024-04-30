// src/redux/actions.js
import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

// Adds a new contact
export const addContact = 
  createAction('contacts/addContact',
    ({ name, number }) => 
      ({
        payload: 
          {
            id: nanoid(), // Generate a unique ID for each contact
            name,
            number,
          },
      })
  );

// Deletes a contact by id
export const deleteContact = createAction('contacts/deleteContact');

// Sets the current filter
export const setFilter = createAction('filters/setFilter');


// OLD CODE action.js using redux
// src/redux/actions.js
/*
import { nanoid } from 'nanoid';

// Action Types
export const ADD_CONTACT = 'contacts/addContact';
export const DELETE_CONTACT = 'contacts/deleteContact';
export const SET_FILTER = 'filters/setFilter';

// Action Creators

// Adds a new contact
export const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    id: nanoid(), // Generate a unique ID for each contact
    name,
    number,
  },
});

// Deletes a contact by id
export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id, // Only the ID is necessary to identify which contact to delete
});

// Sets the current filter
export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter, // The filter value to apply
});

*/


