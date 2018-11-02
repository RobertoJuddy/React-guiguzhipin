import {reqRegister} from '../api'

import {AUTH_SUCCESS , ERR_MSG} from './action-types'

export const authSuccess = user =>({type:AUTH_SUCCESS, data:user});

export const errMsg = msg =>({type:ERR_MSG, data:msg});


//异步action

export const register = data =>{

  const {username, password , rePassword , type} = data;
  if(!username){
    return errMsg({username, password , msg:'请输入用户名字'})
  }else if(!password){
    return errMsg({username, password , msg:'请输入密码'})
  }else if(password !== rePassword){
    return errMsg({username, password , msg:'两次密码输入不一致'})
  }else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});
  }

  return dispatch =>{

    reqRegister(data)
      .then(res=>{
        const result = res.data;
        console.log(result);
        if(result.code===0){
          dispatch(authSuccess(result.data));
        }else{
          dispatch(errMsg((result.msg)))
        }
      })
      .catch(err=>{
        dispatch(errMsg('网络不稳定，请刷新'))

      })
  }


};