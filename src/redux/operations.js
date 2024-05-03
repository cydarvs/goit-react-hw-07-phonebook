import axios from 'axios';
import { fetchingInProgress, fetchingSuccess, fetchingError } from './contactsSlice';

axios.defaults.baseURL = 'https://6633a573f7d50bbd9b4a2f73.mockapi.io/api/';

// create the asynchronous action generation
export const fetchContacts = () => async dispatch => {
    try {
        // load indicator
        dispatch(fetchingInProgress());             // while fetching in progress
        // HTTP Request
        const response = await axios.get('/contacts'); 
        dispatch(fetchingSuccess(response.data));   // if completed fetching data dispatch fetch Success with the data
    } catch (error) {
        dispatch(fetchingError(error.message));     // if error occured while fetching data
    }
};
