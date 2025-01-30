import { ProjectList } from "./ProjectList";

export function Projects() {
  return (
    <>
      <section className="px-14">
        <div className="flex flex-col items-center justify-center">
          <h1 className="py-14 text-2xl">Projects</h1>
          <p>
            These are some of the notable projects that I did while going
            through The Odin Project course. You can check out all the projects
            and activities I have done on my GitHub account.
          </p>
          <div className="flex items-center justify-center">
            <ProjectList />
          </div>
        </div>
      </section>
    </>
  );
}
