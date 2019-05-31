import authReducer from "./authReducer";
import despesasReducer from "./despesasReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  despesas: despesasReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
