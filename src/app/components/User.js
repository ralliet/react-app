import React from 'react'
import { Switch, Route } from 'react-router-dom'


// The Roster component matches one of two different routes
// depending on the full pathname
const User = () => (
  <Switch>
    <Route exact path='/user' component={FullRoster}/>
    <Route path='/user/:number' component={Player}/>
  </Switch>
)


export default User