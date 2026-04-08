import { Box } from '@chakra-ui/react'
import { Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box minH={"100vh"} bg={"gray.100"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  )
}

export default App
