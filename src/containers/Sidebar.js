import React, { Component } from 'react';

// material
import { Drawer, Divider } from '@material-ui/core';

// components
import Profile from '../components/Profile';
import UpgradePlan from '../components/UpgradePlan';

class Sidebar extends Component {

  state = {
    isPro: false
  };
  
  togglePro = () => this.setState({
    isPro: !this.state.isPro
  });

  render() {
    const { isPro } = this.state;
    
    return (
      <Drawer variant="permanent" PaperProps={{ style: { width: 256 } }}>
        <Profile
          isPro={isPro}
        />
        
        <Divider />
        
        <UpgradePlan
          isPro={isPro}
          onUpgradeClick={this.togglePro}
        />
      </Drawer>
    );
  }
}


export default Sidebar;