import React ,{Component} from 'react';
import {Button, InputItem, List, NavBar, WhiteSpace, WingBlank} from "antd-mobile";
import Logo from "../logo";
import {reqLogin} from '../../api';

class Login extends Component {

  state = {
    username:'',
    password:'',
    rePassword:''
  };

  handleChange = (name,val) => {
    this.setState({
      [name]:val,
    })
  };

  toMain = async() => {
    const {username , password ,rePassword} = this.state;
    console.log(username , password);

    if (password === rePassword) {
      //发送ajax请求
      const data = await reqLogin({username, password});
      console.log(data);
      if(data.data.code ===0){
        alert('ok')
      }else if(data.data.code ===1){
        alert('用户名或者密码错误')
      }else if(data.data.code === 2){
        alert('用户不合法')
      }else if(data.data.code === 3){
        alert('网络不稳定，请刷新')
      }
    } else {
      //提示两次密码输入不一致
      alert('两次密码输入不一致');
    }

  };


  toRegister =() =>{
    this.props.history.replace('/register')
  };

  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WhiteSpace />
        <WingBlank>
          <form>
            <List>
              <InputItem placeholder="请输入用户名" onChange={val=>this.handleChange('username',val)}>用户名</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入密码" onChange={val=>this.handleChange('password',val)} type="password">密码</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入确认密码" type="password" onChange={val=>this.handleChange('rePassword',val)}>确认密码</InputItem>
              <WhiteSpace />
              <Button type="primary" onClick={this.toMain}>登录</Button>
              <WhiteSpace />
              <Button onClick={this.toRegister}>还没有账户</Button>
            </List>
          </form>

        </WingBlank>
      </div>
    )
  }

}

export default Login