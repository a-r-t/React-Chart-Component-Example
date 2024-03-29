import { Routes, Route, Outlet  } from "react-router-dom";
import Home from './Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
