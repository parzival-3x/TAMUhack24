import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import Datapage from './Datapage';
import SignupLoginForm from './SignupLoginForm';

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

          <Route
            path="/sign-in"
            element={<SignupLoginForm/>}
          />
        </Routes>
      </Router>
    </>

    
  );
}

export default App;
