import React, {Component} from 'react';

import {Grid, List} from 'antd-mobile'

class HeaderSelertor extends Component {

  state = {
    icon: ''
  };

  headerChange = ({icon, text}) => {

    this.setState({
      icon,
    })
    this.props.setHeader(text)
  };




  render() {
    const {icon} = this.state;
    const data = Array.from(new Array(20)).map((item, index) => ({
      icon: require(`./avatars/头像${index + 1}.png`),
      text: `头像${index + 1}`,
    }));

    const headerSrc = icon ? <div>请选择头像<img src={icon}/></div> : '请选择头像';

    return (
      <List renderHeader={() => headerSrc}>
        <Grid data={data} columnNum={5} onClick={this.headerChange}/>
      </List>


    )

  }

}

export default HeaderSelertor