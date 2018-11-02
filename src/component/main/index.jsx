import React ,{Component} from 'react';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../dashen-info';
import {Route, Switch} from 'react-router-dom';
class Main extends Component {

  render() {
    return (
     <Switch>
       <Route path='/laobanInfo' component={LaobanInfo} />
       <Route path='/dashenInfo' component={DashenInfo} />
     </Switch>

    )
  }

}

export default Main;