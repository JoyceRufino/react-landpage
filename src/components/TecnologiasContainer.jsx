import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact
} from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'
import '../styles/components/TecnologiasContainer.sass'

const tecnologias = [
  {id: "html", name:"HTML5", icon: <DiHtml5 />, descr: "Estudos e projetos com HTML há um ano. "},
  {id: "css", name:"CSS3", icon: <DiCss3/>, descr: "Estudos e projetos com HTML há um ano. "},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />, descr: "Iniciante em JavaScript"},
  {id: "react", name:"React", icon: <DiReact />, descr: "Iniciante. Programando sistemas internos e paginas web"},
  {id: 'figma', name:"Figma", icon: <FiFigma />, descr: "Criação de Layouts e Prototipagem"}
]

const TecnologiasContainer = () => {
  return (
    <section className='tecnoligias-container'>
      <h2>Tecnologias</h2>
      <div className='tecnologias-grid'>
        {tecnologias.map((tech) => (
          <div className='tecnologia-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='tecnologia-info'>
              <h3>{tech.name}</h3>
              <p>{tech.descr}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default TecnologiasContainer