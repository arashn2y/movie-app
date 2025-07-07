import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/register" element={<div>Register</div>} />
    </Routes>
  );
}

export default App;
