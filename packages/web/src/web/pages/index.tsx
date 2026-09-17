import { About } from "../components/site/about";
import { Contact } from "../components/site/contact";
import { Hero } from "../components/site/hero";
import { Nav } from "../components/site/nav";
import { Process } from "../components/site/process";
import { Stack } from "../components/site/stack";

function Index() {
  return (
    <div className="bg-void">
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

export default Index;
