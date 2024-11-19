// src/redux/actions.js
import { INCREMENT, DECREMENT } from "./ActionType";

export const increment = () => ({
  type: INCREMENT,
    });
    
export const decrement = () => ({
  type: DECREMENT,
});
