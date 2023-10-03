import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [project, setProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const showProject = (project) => {
    setProject(project);
    setShowProjectModal(true);
  };

  const closeProject = () => {
    setShowProjectModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        // Props
        project,
        showProjectModal,

        // Methods
        showProject,
        closeProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
