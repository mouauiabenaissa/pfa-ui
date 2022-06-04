import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppContext from "./Context/AppContext"
import Home from "./pages/login/LoginForm"
import SignUpForm from "../src/pages/SignUp/SignUpForm.js"
import Dashboard from "./pages/Dashboard/Dashboard ";
import LoginForm from "../src/pages/login/LoginForm"
function App() {
  return (
    <div className="App">
      <AppContext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route exact path="/signup" element={<SignUpForm />} />
            <Route exact path="/*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AppContext>
    </div>
  );
}

export default App;
