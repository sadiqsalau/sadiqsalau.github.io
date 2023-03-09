import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { Footer } from "./sections/footer/footer";
import { Hero } from "./sections/hero/hero";
import { MainArea } from "./partials/main-area/main-area";
import { PWAPrompt } from "./partials/pwa-prompt/pwa-prompt";
import { Projects } from "./sections/projects/projects";
import { Resume } from "./sections/resume/resume";
import { SectionGroup } from "./components/section-group/section-group";

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
    <PWAPrompt />
  </>
);
