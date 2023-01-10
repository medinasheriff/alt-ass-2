import { NavLink, Outlet } from "react-router-dom";
function Home() {
  let activeStyle = { padding: "2px 0", borderBottom: "4px solid #ffb3c6" };
  return (
    <div>
      <h2>Medina's Altschool Second Semester 2nd Assignment: React </h2>
      <nav className="navbar">
        <p className="logo">Mind&Body Fitness</p>
        
        <div className="navtabs">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
            end
          >
             Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/users"
          >
            Meet Our Users
          </NavLink>
        </div>
      </nav>
      {/* <Link to="/index">index</Link> */}
      <Outlet />
    </div>
  );
}

export default Home;
