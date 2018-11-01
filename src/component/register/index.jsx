import React ,{Component} from 'react';
import { NavBar , List, InputItem, WhiteSpace ,WingBlank,Radio ,Button} from 'antd-mobile';
import Logo from '../logo'
import {reqRegister} from '../../api'

const Item = List.Item;

class Register extends Component {
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

    if (password === rePassword) {
      //发送ajax请求
      const data = await reqRegister({username, password, type});
      console.log(data);
    } else {
      //提示两次密码输入不一致
      alert('两次密码输入不一致');
    }

    this.props.history.replace('/login');
  };

  toLogin=() => {

    this.props.history.replace('/login');

  };

  render() {
    const {type} = this.state;
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