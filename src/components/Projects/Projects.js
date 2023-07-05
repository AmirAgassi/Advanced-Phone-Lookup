import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ projects }) => (
  <section id='projects' className='section projects'>
    <div className='projects__grid'>
      {projects.map((project) => (
        <ProjectContainer key={uniqid()} project={project} />
      ))}
    </div>
  </section>
)


export default Projects
