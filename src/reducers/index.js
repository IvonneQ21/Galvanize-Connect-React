import { combineReducers } from 'redux';
import GoogleAuthReducer from './reducer_login';
import { reducer as formReducer} from 'redux-form';
import ProjectReducer from './reducer_project';

const rootReducer = combineReducers({
  GoogleAuth: GoogleAuthReducer,
  form: formReducer,
  project: ProjectReducer
});

export default rootReducer;
