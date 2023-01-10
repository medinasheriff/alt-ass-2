import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      Oops! ERROR 404. Cant't find searched page. Click
      <Link to="/"> here </Link> to go back Home.
    </div>
  );
}

export default ErrorPage;
