import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Users from "./Users";
import Home from "./Home";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback";
import Index from "./Index";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Index />} />
            <Route path="users" element={<Users />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
