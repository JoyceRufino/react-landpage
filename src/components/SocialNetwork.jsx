import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import '../styles/components/socialnetwork.sass'

//para fazer a interação e trazer os dados de cada rede social
const socialNetworks =[
    {name: 'linkedin', icon: <FaLinkedinIn /> ,link: "https://www.linkedin.com/in/joyce-rufino-057521183/"},
    {name: 'github', icon: <FaGithub /> , link: "https://github.com/JoyceRufino"},
]


const SocialNetwork = () => {
  return (
    <section id='social-networks'>
        {socialNetworks.map((network) => (
            <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}

    </section>
  )
}

export default SocialNetwork