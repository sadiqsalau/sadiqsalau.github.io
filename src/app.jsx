import { SectionGroup } from "./components/section-group/section-group";
import { MainArea } from "./partials/main-area/main-area";
import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { Footer } from "./sections/footer/footer";
import { Hero } from "./sections/hero/hero";
import { Projects } from "./sections/projects/projects";
import { Resume } from "./sections/resume/resume";

export const App = () => (
  <>
    <Hero />
    <MainArea>
      <SectionGroup>
        <About />
        <Projects />
      </SectionGroup>
      <SectionGroup>
        <Contact />
        <Resume />
      </SectionGroup>
    </MainArea>
    <Footer />
  </>
);
