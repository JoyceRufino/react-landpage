import React from 'react'
import Avatar from '../img/Joyce.png'
import '../styles/components/sidebar.sass'
import SocialNetwork from './SocialNetwork'



const Siderbar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Arte por Joyce Rufino"/>
      <p className='title'>Desenvolvedora Fron-End</p>
      <SocialNetwork />
    </aside>
   
  )
}

export default Siderbar