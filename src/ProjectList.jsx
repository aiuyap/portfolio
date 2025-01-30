import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  const projects = [
    {
      title: "Project 1",
      image: "https://via.placeholder.com/300",
      description: "This is a description of project 1.",
    },
    {
      title: "Project 2",
      image: "https://via.placeholder.com/300",
      description: "This is a description of project 2.",
    },
    {
      title: "Project 3",
      image: "https://via.placeholder.com/300",
      description: "This is a description of project 3.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-around gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          image={project.image}
          description={project.description}
        />
      ))}
    </div>
  );
}
