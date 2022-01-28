import { applyMiddleware, combineReducers, createStore } from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newPostReduser } from "./newName";


import { predictionsReduser } from "./predictions";


const rootReducer = combineReducers({
predictions: predictionsReduser,
newPosts: newPostReduser

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
