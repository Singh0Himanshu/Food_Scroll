import React from 'react'
import {BrowserRouter as Router,routes,route} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
        <routes>
            <route path="" element={<h2>Hello h2</h2>}/>
            <route path="/h" element={<h2>Hello </h2>}/>
            <route path="/g" element={<h2>Hello </h2>}/>
        </routes>
    </Router>
  )
}

export default AppRoutes
