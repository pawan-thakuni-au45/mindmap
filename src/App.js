import React from 'react'
import Header from './components/Header.js'
import Content from './components/Content.js'
import Leftmenu from './components/Leftmenu.js'
import Breadcrumbs from './components/Breadcrumbs.js'

const App = () => {
  return (
    <div>
    <Header/>
    <Leftmenu/>
    <Breadcrumbs/>
      <Content/>
    </div>
  )
}

export default App