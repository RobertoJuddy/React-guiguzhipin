import {reqRegister, reqUpDateUserInfo} from '../api'

import {AUTH_SUCCESS , ERR_MSG, UPDATE_SUCCESS, UPDATE_RESET} from './action-types'


export const authSuccess = user =>({type:AUTH_SUCCESS, data:user});

export const errMsg = msg =>({type:ERR_MSG, data:msg});

export const updateSuccess = msg =>({type:UPDATE_SUCCESS, data:msg});

export const updateReset = msg =>({type:UPDATE_RESET, data:msg});


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
          dispatch(errMsg({msg: result.msg, username: data.username, type: data.type}));
        }
      })
      .catch(err=>{
        dispatch(errMsg('网络不稳定，请刷新'))

      })
  }


};



export const updateUserInfo = data =>{

  const {header, info, post, salary, company} = data;
  if(!header){
    return updateReset({msg:'请选择头像'})
  }else if(!post){
    return updateReset({ msg:'请填写招聘职位'})
  }else if(!company){
    return updateReset({msg:'请输入公司名称'})
  }else if (!salary) {
    return updateReset({msg: '请输入公司薪酬范围'});
  }else if(!info){
    return updateReset({msg: '请输入公司简介'})
  }

  return dispatch =>{

    reqUpDateUserInfo(data)
      .then(res=>{
        const result = res.data;
        console.log(result);
        if(result.code===0){
          dispatch(updateSuccess(result.data));
        }else{
          dispatch(updateReset({msg: result.msg}));
        }
      })
      .catch(err=>{
        dispatch(updateReset({msg: '网络不稳定，请重新试试~'}))

      })
  }


};