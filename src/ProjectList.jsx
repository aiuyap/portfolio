import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
  const projects = [
    {
      title: "Battleship",
      image: "../img/battleship.png",
      description:
        "This project was made purely on HTML, CSS and vanilla JavaScript. It taught me a lot of fundamentals of JavaScript that helped me learn and appreciate frameworks like React even more. I learned a lot about object oriented programming using factories and closures. In this project I also practiced test driven development using Jest. It was definitely fun and challenging.",
    },
    {
      title: "Weather App",
      image: "../img/weather.png",
      description:
        "This was also created using vanilla JavaScript. In this project I learned how to retrieve and utilize data from a third-party API. I also learned about asynchronous programming, promises and utilized a third-party library for formatting dates.",
    },
    {
      title: "Memory Game",
      image: "../img/memory-game.png",
      description:
        "This project was made using React and I learned more stuff about React like props, useState and useEffect. I also utilized a third-party API for the data. In this project I also practiced using Tailwind CSS.",
    },
    {
      title: "Shopping Cart",
      image: "../img/shopping-cart.png",
      description:
        "This project taught me more about the fundamentals of React. I was able to utilize hooks like useState, useEffect and useOutletContext. I also learned about SPAs (Single Page Application) and utilized React Router to build it. I am also able to practice using a component library like shadcn/ui and lucide for icons. I also learned about type checking using PropTypes. I also used a third party API (Fake Store API) to populate the store.",
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
