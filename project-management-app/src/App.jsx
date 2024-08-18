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

  function handleAddProject(projectData) {
    setprojectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Date.now()
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        title={"Your Projects"}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
