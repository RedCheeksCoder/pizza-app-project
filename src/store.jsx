import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
//import all reducers from all the slices. Fill up the reducer belo for automatic import.

const store = configureStore({
  reducer: {
    //all of the reducers from each slice
    user: userReducer,
  },
});
export default store;
