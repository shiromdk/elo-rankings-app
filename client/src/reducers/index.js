import { combineReducers } from 'redux';
import PlayerReducer from './reducer_players';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  players:PlayerReducer
});

export default rootReducer;
