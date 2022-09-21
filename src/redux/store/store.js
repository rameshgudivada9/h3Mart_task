import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import { Reducerdata } from "./todoRedux/Reducer";
  
  const middleware = (store) => (next) => (action) => {
    console.log("action", action);
    next(action);
  };
  
  const rootReducers = combineReducers({
    getdata: Reducerdata,
  });
  
  export const Store = createStore(rootReducers, applyMiddleware(middleware));