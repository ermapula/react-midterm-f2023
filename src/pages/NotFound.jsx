import { Link } from "react-router-dom"


export default function NotFound(params) {
  return (
    <div>
      <h1>Error 404: The page is not found.</h1>
      <h2>Return to <Link to='/'>home page</Link></h2>
    </div>
  )
};
