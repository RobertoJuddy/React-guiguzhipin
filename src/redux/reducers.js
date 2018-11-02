import {combineReducers} from 'redux'
import {AUTH_SUCCESS , ERR_MSG} from './action-types'
import {getRedirectPath} from '../utils';

const initUserState={
  username : '',
  type : '',
  msg : '',
  toPath: ''
};
function user(PreState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {username : action.data.username , type : action.data.type, msg : '',toPath : getRedirectPath(action.data.type, action.data.header)};
    case ERR_MSG:
      return {...action.data};
    default:
      return PreState
  }
}

export default combineReducers ({
  user
})


