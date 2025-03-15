import { legacy_createStore, applyMiddleware } from "redux";
import { useState } from "react";
import quizReducer from "./reducer";
import {thunk} from 'redux-thunk'




let store = legacy_createStore(quizReducer, applyMiddleware(thunk));


export default store




