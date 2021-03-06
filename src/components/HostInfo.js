import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from '../services/Log'

class HostInfo extends Component {
  state = {
    options: this.props.areas.map(area => ({
      key: area.name,
      text: area.name.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()}),
      value: area.name
    }))
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }



  handleChange = (e, {value}) => {
    const newArea = this.props.areas.find( area => area.name === value)
    const newAreaName = newArea.name.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, function(key) { return key.toUpperCase()})
    const hostsInArea = this.props.hosts.filter( host => host.area === value)
    const host = this.props.host
    if (newArea.limit < hostsInArea.length + 1) {
      this.props.addLog(Log.error(`Too many hosts. Cannot add ${host.firstName} to ${newAreaName}`))
    } else {
      this.props.addLog(Log.notify(`${host.firstName} set in area ${newAreaName}`))
      this.props.changeHostArea(this.props.host.id, value)
    }
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
    const { host } = this.props
    if (host.active) {
      this.props.addLog(Log.notify(`Decomissioned ${host.firstName}`))
    } else {
      this.props.addLog(Log.warn(`Activated ${host.firstName}`))
    }
    this.props.changeHostActive(this.props.host.id)
    // console.log("The radio button fired");
  }

  render(){
    const { host } = this.props
    console.log(host)
    console.log(this.state.value)
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={ host.imageUrl }
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                { host.firstName } | { host.gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={ host.active ? "Active" : "Decommissioned"}
                  // {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                  checked={ host.active ? true : false }
                  // {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={host.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
