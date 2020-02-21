import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = ({ areas, hosts, selectedHostId, changeSelectedHostId }) => {

  return (
    <Segment id="map" >
      {/* What should we render on the map? */}
      { areas.map(area => <Area {...area} 
                                hosts={ hosts.filter(host => host.active && host.area === area.name) }
                                selectedHostId={ selectedHostId }
                                changeSelectedHostId={ changeSelectedHostId }
                                key={ area.id }
                                />) }

    </Segment>
  )
}

export default WestworldMap
