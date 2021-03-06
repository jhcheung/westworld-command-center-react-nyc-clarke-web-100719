import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'




class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  render(){
    const { activated, addLog, areas, hosts, logs, selectedHostId, changeSelectedHostId, changeHostActive, changeHostArea, toggleActivateAll } = this.props
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
          <ColdStorage hosts={ hosts.filter(host => !host.active) }
                        changeSelectedHostId={ changeSelectedHostId }
                        selectedHostId={ selectedHostId } />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details hosts={ hosts }
                    areas={ areas }
                    selectedHostId={ selectedHostId }
                    changeHostActive = { changeHostActive }
                    changeHostArea = { changeHostArea }
                    addLog = { addLog }
                    />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
          <LogPanel 
                  activated={ activated }
                  toggleActivateAll={ toggleActivateAll }
                  addLog = { addLog }
                  logs = { logs }
                  />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
