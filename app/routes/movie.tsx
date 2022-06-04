import { Outlet } from "@remix-run/react";

const Movie = () => {
  return (
    <div>
      <h1>Movie Pages</h1>
      <Outlet />
    </div>
  );
};

export default Movie;
