import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import Datapage from './Datapage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/datapage"
            element={<Datapage/>}
          />

          <Route
            path="*"
            element={<Home/>}
          />
        </Routes>
      </Router>
    </>

    
  );
}

export default App;
