import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = ({ areas, hosts, selectedHostId, changeHostActive }) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(
    <Segment id="details" className="HQComps">
      { selectedHostId
          ? <HostInfo
                  changeHostActive={changeHostActive} 
                  areas={ areas }host={ hosts.find(host => host.id === selectedHostId) }/>
          : renderSomething()}
    </Segment>
  )
}

export default Details
