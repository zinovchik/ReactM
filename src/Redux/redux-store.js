import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer"
import dialogReducer from "./dialogReducer"
import sidebarReducer from "./sidebarReducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage:  dialogReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);
export default store;