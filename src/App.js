import {React, useState} from 'react'
import { useSelector } from 'react-redux';
import { Content } from './components/layout/Content';
import {Header} from './components/layout/Header';
import { ProjectsProvider } from './context/projects-context';
import { SelectedProjectProvider } from './context/selected-project-context';


export const App=()=>  {

// const [darkMode, setDarkMode] = useState(darkModeDefault);
const darkMode = useSelector(state => state.themes.darkmode)

return (

  
  <SelectedProjectProvider>
  <ProjectsProvider>
    <main
      data-testid="application"
      className={darkMode ? 'darkmode' : undefined}
    >
      <Header darkMode={darkMode}  />
      <Content />
    </main>
  </ProjectsProvider>
</SelectedProjectProvider>

  );

}
