import ProjectCard from "./projects/ProjectCard"

const projects = [
  {
    id: 1,
    title: 'Luxury Speedsters 🚘',
    photo: 'https://lh3.google.com/u/1/d/1JYkre19MOxkk69W-_VaFNjiNyOVkcLFt=w1868-h903-iv1',
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
    photo: 'https://lh3.google.com/u/1/d/13708KiJ8_1pn5IkeTJ2SZbp3TrtJA7l7=w2000-h3556-iv1',
    description: `Experience the future of automotive luxury with our 
                  "Luxury Speedsters" app. This app enables users to browse 
                  a diverse catalog of cutting-edge vehicles, explore detailed 
                  car profiles, and effortlessly create reservations for their dream cars. 
                  Keep track of all your reservations in one place 
                  .`,
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
      <div className="w-11/12 m-auto mt-12 flex flex-col justify-center gap-4">
        {projects.map(project => (
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
    </section>
  )
}

export default ProjectList
