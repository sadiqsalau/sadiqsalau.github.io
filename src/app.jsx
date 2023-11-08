import { About } from "./sections/about/about";
import { AppProvider } from "./app-provider";
import { Clients } from "./sections/clients/clients";
import { Contact } from "./sections/contact/contact";
import { FAQ } from "./sections/faq/faq";
import { Footer } from "./sections/footer/footer";
import { Hero } from "./sections/hero/hero";
import { MainArea } from "./partials/main-area/main-area";
import { ProjectModal } from "./partials/project-modal/project-modal";
import { Projects } from "./sections/projects/projects";
import { Resume } from "./sections/resume/resume";
import { SectionGroup } from "./components/section-group/section-group";
import { Skills } from "./sections/skills/skills";
import { Testimonials } from "./sections/testimonials/testimonials";

export const App = () => (
  <AppProvider>
    <Hero />
    <MainArea>
      <SectionGroup>
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <FAQ />
        <Clients />
      </SectionGroup>
      <SectionGroup className="[@media(min-height:480px)]:sticky top-2">
        <Contact />
        <Resume />
      </SectionGroup>
    </MainArea>
    <Footer />

    {/* Partials */}
    <ProjectModal />
  </AppProvider>
);
