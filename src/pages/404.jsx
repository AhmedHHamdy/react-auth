import { Link } from "react-router-dom";
import "../App.css"

export default function NotFound() {
  return (
    <div className="flex justify-center items-center pt-32 flex-col">
      <h1 className="text-3xl">Sorry, the page you were looking for was not found.</h1>
      <Link className="text-2xl underline mt-4" to="/">Return to Home</Link>
    </div>
  )
}