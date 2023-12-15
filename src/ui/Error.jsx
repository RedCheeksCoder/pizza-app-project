import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();/* If ever na may error sa routing */

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>&larr; Go back</button>
    </div>
  );
}

export default Error;
