import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setprojectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setprojectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelAddProject() {
    setprojectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleAddProject(projectData) {
    setprojectsState(prevState => {
      const projectId = Date.now()
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projectsState.projects}
        title={"Your Projects"}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
