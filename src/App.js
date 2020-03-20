import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import * as requests from './components/requests'
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'



class App extends Component {

  state = {
    areas: [],
    hosts: [],
    selectedHostId: null,
    activated: false,
    logs: []
  }

  changeSelectedHostId = (host) => {
    this.setState({ selectedHostId: host })
  }

  changeHostArea = (targetHostId, area) => {
    this.setState(prevState => ({
      hosts:  prevState.hosts.map(host => {
                if (host.id === targetHostId) {
                  host.area = area
                }
                return host
              })

    }))
  }

  addLog = (logEvent) => {
    this.setState(prevState => ({
      logs: [logEvent, ...prevState.logs]
    }))
  }

  changeHostActive = (targetHostId) => {
    this.setState(prevState => ({
      hosts:  prevState.hosts.map(host => {
                if (host.id === targetHostId) {
                  host.active = !host.active
                }
                return host
              })

    }))
  }

  toggleActivateAll = () => {
    this.setState(prevState => ({
      hosts:  prevState.hosts.map(host => {
                host.active = !prevState.activated
                return host
              }),
      activated: !prevState.activated
    }))
  }

  componentDidMount() {
    requests.fetchHosts()
      .then(hosts => this.setState({ hosts: hosts }))
    requests.fetchAreas()
      .then(areas => this.setState({ areas: areas }))
  }

  render(){
    console.log(this.state)
    return (
      <Segment id='app'>
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap areas={this.state.areas}
                      hosts={this.state.hosts}
                      selectedHostId={this.state.selectedHostId}
                      changeSelectedHostId={this.changeSelectedHostId}
                      />
        <Headquarters areas={this.state.areas}
                      hosts={this.state.hosts}
                      selectedHostId={this.state.selectedHostId}
                      changeSelectedHostId={this.changeSelectedHostId}
                      changeHostArea={this.changeHostArea}
                      changeHostActive={this.changeHostActive}
                      activated={this.state.activated}
                      toggleActivateAll={this.toggleActivateAll}
                      addLog={this.addLog}
                      logs={this.state.logs}
                      />

      </Segment>
    )
  }
}

export default App;
