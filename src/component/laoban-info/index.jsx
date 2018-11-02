import React ,{Component} from 'react';
import {Button ,List, InputItem, NavBar,TextareaItem} from 'antd-mobile';
import HeaderSelector from '../header-selector'

class LaobanInfo extends Component {
  state ={
    header:'',
    info:'',
    post:'',
    salary:'',
    company:''

    // |参数		|是否必选 |类型     |说明
    // |header    |Y       |string   |头像名称
    // |info      |N       |string   |介绍
    // |post      |N       |string   |职位
    // |salary    |N       |string   |月薪
    // |company   |N       |string   |公司
  };

  handleChange =(name,val)=>{
    this.setState({
      [name]:val
    })
  };



  render() {
    return (
      <List>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector />
        <InputItem onChange={val=>{this.handleChange('post',val)}}>招聘职位：</InputItem>
        <InputItem onChange={val=>{this.handleChange('company',val)}}>公司名称：</InputItem>
        <InputItem onChange={val=>{this.handleChange('salary',val)}}>职位薪资：</InputItem>
        <TextareaItem title="职位要求" rows={3} onChange={val=>{this.handleChange('info',val)}}/>
        <Button type="primary">保存</Button>
      </List>
    )
  }

}

export default LaobanInfo;