import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import { NavBar , List, InputItem, WhiteSpace ,WingBlank,Radio ,Button} from 'antd-mobile';

import Logo from '../logo'
import {getRedirectPath} from "../../utils";


const Item = List.Item;

class Register extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
  };

  state ={
    username:'',
    password:'',
    rePassword:'',
    type:'laoban'
  };

  handleChange =(name,val)=>{
    this.setState({
    [name]:val
    })
  };


  register= async ()=>{

     const {username,password,rePassword,type} = this.state;

     //发送ajax请求
     this.props.register({username, password, rePassword, type});




    // if (password === rePassword) {
    //   //发送ajax请求
    //   const data = await reqRegister({username, password, type});
    //   console.log(data);
    //
    //   // if(data.data.code === 0){
    //   //   this.props.history.replace('/login');
    //   // }else if(data.data.code ===1){
    //   //   alert('用户名已存在，请重新注册')
    //   // }else if(data.data.code === 2){
    //   //   alert('输入不合法')
    //   // }else if(data.data.code ===3){
    //   //   alert('网络不稳定，请刷新')
    //   // }
    // } else {
    //   //提示两次密码输入不一致
    //   alert('两次密码输入不一致');
    // }
  };

  toLogin=() => {
    this.props.history.replace('/login');
  };

  render() {
    const {type} = this.state;
    const {msg ,toPath} = this.props.user;

    if(toPath){
      return <Redirect to={toPath} />
    };


    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WhiteSpace />
        <WingBlank>
          <form>
            {msg ? <p className='err-msg'>{msg}</p> : ''}
            <List>
              <InputItem placeholder="请输入用户名" onChange={val=>this.handleChange('username',val)}>用户名</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入密码" type="password" onChange={val=>this.handleChange('password',val)}>密码</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入确认密码" type="password" onChange={val=>this.handleChange('rePassword',val)}>确认密码</InputItem>
              <WhiteSpace />
              <Item>
                用户类型 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio checked={type === 'dashen'} onClick={()=>this.handleChange('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;
                <Radio checked={type === 'laoban'} onClick={()=>this.handleChange('type','laoban')}>老板</Radio>
              </Item>
              <WhiteSpace />
              <Button type="primary" onClick={this.register}>注册</Button>
              <WhiteSpace />
              <Button onClick={this.toLogin}>已有账户</Button>
            </List>
          </form>

        </WingBlank>
      </div>

    )
  }

}

export default Register;