import ProjectCard from "./projects/ProjectCard"

const projects = [
  {
    id: 1,
    title: 'Luxury Speedsters 🚘',
    photo: '#',
    description: `Experience the future of automotive luxury with our 
                  "Luxury Speedsters" app. This app enables users to browse 
                  a diverse catalog of cutting-edge vehicles, explore detailed 
                  car profiles, and effortlessly create reservations for their dream cars. 
                  Keep track of all your reservations in one place.`,
    technologies: 'Ruby On Rails, React and Redux, Tailwind CSS, PostgreSQL',
    see_live: 'rentals-app-egry.onrender.com',
    see_source: 'https://github.com/Luiscarlosvd/futuristic-transportation/tree/main',
  },
  {
    id: 2,
    title: 'Luxury Speedsters 🚗',
    photo: '#',
    description: `Experience the future of automotive luxury with our 
                  "Luxury Speedsters" app. This app enables users to browse 
                  a diverse catalog of cutting-edge vehicles, explore detailed 
                  car profiles, and effortlessly create reservations for their dream cars. 
                  Keep track of all your reservations in one place.`,
    technologies: 'Ruby On Rails, React and Redux, Tailwind CSS, PostgreSQL',
    see_live: 'rentals-app-egry.onrender.com',
    see_source: 'https://github.com/Luiscarlosvd/futuristic-transportation/tree/main',
  },
]

const ProjectList = () => {
  return (
    <section className="my-8">
      <div className="flex justify-between w-11/12 m-auto items-center">
        <div className="w-full h-2 shadow-md rounded-s-lg bg-mantis" />
        <h1 className="text-shadow text-center w-2/3 px-4 font-bold text-2xl text-dark-spring-green" >My Projects</h1>
        <div className="w-full h-2 shadow-md rounded-e-lg bg-mantis" />
      </div>
      <div className="w-11/12 m-auto mt-12 flex flex-col gap-4">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies.split(", ")}
            linkSource={project.see_source}
            linkLive={project.see_live}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectList
