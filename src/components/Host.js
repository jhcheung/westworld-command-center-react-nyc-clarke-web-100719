import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({ host, selected, changeSelectedHostId }) => {
  return(
    <Card
      className= { selected ? "host selected" : "host" }
      // {/* NOTE: The className "host selected" renders a different style than simply "host". */}
      onClick={() => changeSelectedHostId(host.id) /* On Click what? */}
      image={ host.imageUrl }
      raised
    />
  )
}

export default Host
