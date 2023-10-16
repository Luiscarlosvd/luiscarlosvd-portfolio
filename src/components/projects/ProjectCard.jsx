import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'
import { GrDeploy } from 'react-icons/gr'

const ProjectCard = ({ id, title, description, technologies, linkSource, linkLive = '#', photo }) => {
  return (
    <div className='bg-project-card bg-opacity-10 rounded-md shadow-md border-t-8 border-zomp py-4 max-w-5xl m-auto'>
      <div className={`w-11/12 m-auto text-center md:flex md:gap-4 md:items-center ${ id % 2 === 0 ? 'flex-row-reverse' : ''}`}>
        <div className='md:w-3/5'>
            <img src={photo} className='w-11/12 m-auto max-w-xl rounded-sm shadow-md border-b-4 border-zomp md:max-h-96 md:object-contain' alt={`${title} page`}/>
        </div>
        <div className='md:w-2/5 md:py-10 md:text-left'>
            <h1 className='text-gray-600 my-2 font-bold text-lg'>{title}</h1>
            <p className='text-gray-500 text-left'>{description}</p>
            <ul className='flex gap-2 flex-wrap w-11/12 my-4 m-auto'>
                {technologies.map(tech => (
                <li key={tech} className='bg-zomp bg-opacity-80 px-2 font-medium text-midnight-green rounded-sm border-l-2 border-midnight-green'>{tech}</li>
                ))}
            </ul>
            <div className='flex gap-2 justify-center mt-8'>
                <Link 
                className='bg-mantis rounded-md shadow-md text-midnight-green bg-opacity-90 flex gap-2 items-center p-2' 
                to={linkSource}
                >
                    See Source <BsGithub className='text-xl text-black'/>
                </Link>
                <Link 
                className='bg-mantis rounded-md shadow-md text-midnight-green bg-opacity-90 flex gap-2 items-center p-2' 
                to={linkLive}
                >
                    See Live <GrDeploy className='text-xl' />
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
