import ProjectCard from "./projects/ProjectCard"
import projects from "./projects/projectsInfo";
import { useState } from "react"

const ProjectList = () => {
  const [count, setCount] = useState(3);

  const incrementCount = () => {
    if (count + 3 >= projects.length) {
      setCount(projects.length)
    } else {
      setCount(count + 3);
    }
  };

  const decrementCount = () => {
    setCount(3)
  };

  return (
    <section className="my-8">
      <div className="flex justify-between w-11/12 m-auto items-center">
        <div className="w-full h-2 shadow-md rounded-s-lg bg-mantis" />
        <h1 className="text-shadow text-center w-2/3 px-4 font-bold text-2xl text-dark-spring-green" >My Projects</h1>
        <div className="w-full h-2 shadow-md rounded-e-lg bg-mantis" />
      </div>
      <div className="w-11/12 m-auto mt-12 flex flex-col justify-center gap-4">
        {projects.slice(0, count).map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            photo={project.photo}
            description={project.description}
            technologies={project.technologies.split(", ")}
            linkSource={project.see_source}
            linkLive={project.see_live}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        { count === projects.length && <button className='bg-mantis bg-opacity-90 p-2 rounded-md text-midnight-green border-b-4 border-midnight-green' onClick={decrementCount}>Show less</button>}
        { count < projects.length && <button className='bg-mantis bg-opacity-90 p-2 rounded-md text-midnight-green border-b-4 border-midnight-green' onClick={incrementCount}>Show more</button>}
      </div>
    </section>
  )
}

export default ProjectList
