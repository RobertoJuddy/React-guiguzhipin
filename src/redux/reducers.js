import {combineReducers} from 'redux'

const xxxState=123;
function xxx(PreState = xxxState,action) {
  switch (action.type) {

    default:
      return PreState
  }
}


const yyyState=123;
function yyy(PreState = yyyState,action) {
  switch (action.type) {
    default:
      return PreState
  }
}



export default combineReducers ({
  xxx,
  yyy
})
