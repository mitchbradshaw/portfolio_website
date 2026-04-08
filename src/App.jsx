import { Box } from '@chakra-ui/react'
import { Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ProjectPage from './pages/ProjectPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box h={"100vh"} bg="black" _light={{ bg: 'white' }} display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1" overflow="hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
