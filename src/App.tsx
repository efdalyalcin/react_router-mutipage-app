import { 
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage';
import 'bulma';
import { Users } from './components/Users';
import { PageNotFound } from './components/PageNotFound';

export const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="navbar-item"
            to="/users"
          >
            Users Page
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/home"
          element={<Navigate to="/" />}
        />
        <Route
          path="/users/*"
          element={<Users />}
        />

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
}
