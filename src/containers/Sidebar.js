import React, { Component } from 'react';

import { StoreContext } from "../ridaks/store";

// material
import { Drawer, Divider } from '@material-ui/core';

// components
import Profile from '../components/Profile';
import UpgradePlan from '../components/UpgradePlan';

class Sidebar extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    this.unsubscribeStore = this.context.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    const store = this.context;
    const { isPro } = store.getState().user;

    return (
      <Drawer variant="permanent" PaperProps={{ style: { width: 256 } }}>
        <Profile
          isPro={isPro}
        />

        <Divider />

        <UpgradePlan
          isPro={isPro}
          onUpgradeClick={() => store.dispatch({ type: 'TOGGLE_PRO' })}
        />
      </Drawer>
    );
  }
}


export default Sidebar;
