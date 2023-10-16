import React from 'react'

const ProjectCard = ({ title, description }) => {
  return (
    <div className='bg-project-card bg-opacity-10 rounded-md shadow-md border-t-8 border-zomp py-4'>
      <div className='w-11/12 m-auto text-center'>
        <h1 className='text-gray-500'>{title}</h1>
        <p className='text-gray-400 text-left'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
