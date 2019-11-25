import React, { Component } from 'react';

import { togglePro } from '../ridaks/reducers/user'
import { connect } from "../ridaks/store";

// material
import { Drawer, Divider } from '@material-ui/core';

// components
import Profile from '../components/Profile';
import UpgradePlan from '../components/UpgradePlan';

class Sidebar extends Component {

  render() {
    const {
      isPro,
      togglePro
    } = this.props;

    return (
      <Drawer variant="permanent" PaperProps={{ style: { width: 256 } }}>
        <Profile
          isPro={isPro}
        />

        <Divider />

        <UpgradePlan
          isPro={isPro}
          onUpgradeClick={togglePro}
        />
      </Drawer>
    );
  }
}


export default connect(
(state) => ({
    isPro: state.user.isPro
  }),
(dispatch) => ({
    togglePro: () => dispatch(togglePro()),
  })
)(Sidebar);
