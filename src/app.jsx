import { About } from "./sections/about/about";
import { Skills } from "./sections/skills/skills";
import { Contact } from "./sections/contact/contact";
import { Footer } from "./sections/footer/footer";
import { Hero } from "./sections/hero/hero";
import { Projects } from "./sections/projects/projects";
import { Testimonials } from "./sections/testimonials/testimonials";
import { Resume } from "./sections/resume/resume";

import { MainArea } from "./partials/main-area/main-area";
import { PWAPrompt } from "./partials/pwa-prompt/pwa-prompt";
import { ProjectModal } from "./partials/project-modal/project-modal";

import { SectionGroup } from "./components/section-group/section-group";

import { AppProvider } from "./app-provider";

export const App = () => (
  <AppProvider>
    <Hero />
    <MainArea>
      <SectionGroup>
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </SectionGroup>
      <SectionGroup className="[@media(min-height:400px)]:sticky top-2">
        <Contact />
        <Resume />
      </SectionGroup>
    </MainArea>
    <Footer />

    {/* Partials */}
    <PWAPrompt />
    <ProjectModal />
    
  </AppProvider>
);
