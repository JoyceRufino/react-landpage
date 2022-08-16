import React from 'react'

import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjetosContainer from './ProjetosContainer'
import TecnologiasContainer from './TecnologiasContainer'

const MainContent = () => {
  return (
    <main id='maincontent'>
      <AboutContainer />
      <TecnologiasContainer />
      <ProjetosContainer />
    </main>
  )
}

export default MainContent