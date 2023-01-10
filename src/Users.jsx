import { useEffect } from "react";
import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { Link } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleError = useErrorHandler();
  const usersPerPage = 10;
  const [pages, setPages] = useState(1);
  useEffect(() => {
    // fetch("https://randomuser.me/api/?results=10")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => console.log(data));

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=100");
        const data = await response.json();

        setUsers(data.results);
        setLoading(false);
      } catch (error) {
        handleError(error);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <h3 className="members">Fitness center registered members and information.</h3>
      <div className="users-container">
        <div className="users">
        {users
          .slice((pages - 1) * usersPerPage, pages * usersPerPage)
          .map((user, index) => {
            return (
              <div className='user' key={index}>
                {console.log(users)}
                <h4>
                  {user.name.title} {user.name.first} {user.name.last}
                </h4>
                <h5>
                  {user.phone}
                </h5>
                <h5>
                  {user.location.city} {user.location.state}
                </h5>
                <img src={user.picture.medium} />
              </div>
            );
          })}
          </div>
        <div>
          Pages {pages} of {users.length / usersPerPage}
        </div>
        <button
          disabled={pages <= 1}
          onClick={() => {
            setPages((p) => p - 1);
          }}
        >
          Prev
        </button>
        {Array.from(
          { length: Math.ceil(users.length / usersPerPage) },
          (_, index) => index + 1
        ).map((btn) => (
          <button
            key={btn}
            className={(pages === btn ? "active" : null)}
            onClick={() => {
              setPages(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button
          disabled={pages >= users.length / usersPerPage}
          onClick={() => {
            setPages((p) => p + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Users;
