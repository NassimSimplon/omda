// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Houses/Reducer";

const store = configureStore({
  reducer: 
  {
    omda:counterReducer,
 
    
  }, // Specify the reducer
});

export default store;