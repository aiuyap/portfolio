import StackIcon from "tech-stack-icons";

export function LearningJourney() {
  return (
    <section className="flex h-dvh flex-col items-center justify-center px-14">
      <h1 className="pb-14 text-2xl">Learning Journey</h1>
      <p>
        I am a graduate of Bachelor of Science in Information Technology at
        University of Cebu - Banilad Campus on 2019. 3 months ago, I started The
        Odin Project to learn about Web Development. I managed to finish the
        Foundation Course and currently on track with the Full Stack JavaScript
        course. This course taught me a lot of core fundamentals of web
        development which I believe will definitely kickstart my career as a
        Software Engineer.
      </p>
      <h2 className="pt-14 text-2xl">Tech Stack</h2>
      <ul className="flex flex-wrap items-center justify-center gap-14 pt-14">
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="html5" className="w-10" />
          <p>HTML</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="css3" className="w-10" />
          <p>CSS</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="tailwindcss" className="w-10" />
          <p>TailwindCSS</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="js" className="w-10" />
          <p>JavaScript</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="reactjs" className="w-10" />
          <p>React</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="mysql" className="w-10" />
          <p>SQL</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="nodejs" className="w-10" />
          <p>NodeJS</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="npm" className="w-10" />
          <p>npm</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="git" className="w-10" />
          <p>Git</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="github" className="w-10" />
          <p>Github</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="jest" className="w-10" />
          <p>Jest</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="webpack" className="w-10" />
          <p>Webpack</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="vitejs" className="w-10" />
          <p>Vite</p>
        </li>
        <li className="flex flex-col items-center justify-center">
          <StackIcon name="shadcnui" className="w-10" />
          <p>shadcn/ui</p>
        </li>
      </ul>
    </section>
  );
}
