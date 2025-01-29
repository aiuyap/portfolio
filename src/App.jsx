import { LearningJourney } from "./LearningJourney";
import { Projects } from "./Project";

function App() {
  return (
    <>
      <nav className="sticky top-0 flex h-10 items-center justify-center gap-16">
        <a href="#">Home</a>
        <a href="#">Learning Journey</a>
        <a href="#">Projects</a>
      </nav>
      <section className="flex h-dvh items-center justify-center">
        <h1 className="text-2xl">
          Hi, I&apos;m Aiu. An aspiring Software Engineer
        </h1>
      </section>
      <LearningJourney />
      <Projects />
    </>
  );
}

export default App;
