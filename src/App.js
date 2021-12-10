import {
  Flex,
  VStack,
  HStack,
  Heading,
  Image,
  IconButton,
} from '@chakra-ui/react';

// import './App.css';

// new components
import Home from './pages/Home';

function App() {
  return (
    // <Router>
    <div className="App">
      <Home />
      {/* <Routes> */}
      {/* Home page with header component*/}
      {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/scoring-system" element={<ScoringSystem />} /> */}
      {/* <Route exact path="/data" element={<DataPage />} /> */}
      {/* <Route exact path="/about" element={<AboutPage />} />
        </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
