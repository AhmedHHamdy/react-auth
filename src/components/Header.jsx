import "../App.css"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { TbWorld } from "react-icons/tb"
import { useAuth } from "../context/AuthProvider"
import { MdKeyboardArrowDown } from "react-icons/md"
import { AiOutlineMenu } from "react-icons/ai"
import Cookies from "js-cookie"

export default function Header() {
  const activeStyle = {
    color: "#1a154a",
    fontWeight: "700",
    backgroundColor: "#fafafa"
  }

  const { token, setToken } = useAuth()

  const navigate = useNavigate()

  function handleLogout() {
    Cookies.remove("token")
    setToken()
    navigate("/", { replace: true })
  }


  return (
    <header className=" shadow-[0px_0px_10px_#ddd] fixed w-full z-10 bg-white">
      <nav className=" navbar w-9/12 mx-auto justify-between items-center">
        <div className="w-9/12">
          <Link to="/"><img className="" src="https://makkok.com/uploads/default_images/1680687244.png" alt="Makkok-logo" /></Link>
          <ul className="min-[320px]:hidden md:hidden sm:hidden lg:flex w-7/12 ml-12 flex justify-between py-6 text-[#03506f] font-semibold text-base">
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/"  style={({isActive}) => isActive ? activeStyle : null}>Home</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/whymakkok" style={({isActive}) => isActive ? activeStyle : null}>Why makkok</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/pricing" style={({isActive}) => isActive ? activeStyle : null}>Pricing</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/blogs" style={({isActive}) => isActive ? activeStyle : null}>Blogs</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/contact" style={({isActive}) => isActive ? activeStyle : null}>Contact Us</NavLink></li>
            {!token && <li className=""><NavLink className="hover:text-[#1a154a]" to="/login" style={({isActive}) => isActive ? activeStyle : null}>Login</NavLink></li>}
            {token && <li className=""><NavLink className="hover:text-[#1a154a]" to="/products" style={({isActive}) => isActive ? activeStyle : null}>Products</NavLink></li>}

          </ul>
        </div>
        <ul className="md:hidden min-[320px]:hidden sm:hidden lg:flex flex justify-between gap-4">
          <details className="dropdown ">
            <summary tabIndex={0} className="btn p-0 pl-2 bg-[white] border-0 text-[#03506f] text-lg">EGP <MdKeyboardArrowDown /></summary>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
              <li><a>SAR</a></li>
              <li><a>USD</a></li>
              <li><a>EGP</a></li>
              <li><a>QAR</a></li>
            </ul>
          </details>
          <li className="text-lg "><Link><TbWorld className="text-2xl" /></Link></li>
          {!token && <li className="text-lg py-2 px-6 rounded-full bg-[#03506f] font-semibold text-white hover:bg-[#1a154a]"><Link to={"/signup"}>Create Now</Link></li>}
          {token && <li className="text-lg py-2 px-6 rounded-full bg-[#03506f] font-semibold text-white hover:bg-[#1a154a]"><button onClick={handleLogout}>Logout</button></li>}
        </ul>

        <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn m-1 text-2xl"><AiOutlineMenu /></label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/"  style={({isActive}) => isActive ? activeStyle : null}>Home</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/whymakkok" style={({isActive}) => isActive ? activeStyle : null}>Why makkok</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/pricing" style={({isActive}) => isActive ? activeStyle : null}>Pricing</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/blogs" style={({isActive}) => isActive ? activeStyle : null}>Blogs</NavLink></li>
            <li className=""><NavLink className="hover:text-[#1a154a]" to="/contact" style={({isActive}) => isActive ? activeStyle : null}>Contact Us</NavLink></li>
            {!token && <li className=""><NavLink className="hover:text-[#1a154a]" to="/login" style={({isActive}) => isActive ? activeStyle : null}>Login</NavLink></li>}
            {token && <li className=""><NavLink className="hover:text-[#1a154a]" to="/products" style={({isActive}) => isActive ? activeStyle : null}>Products</NavLink></li>}
            {!token && <li className=""><NavLink className="hover:text-[#1a154a]" to="/signup" style={({isActive}) => isActive ? activeStyle : null}>Signup</NavLink></li>}

        </ul>
      </div>
      </nav>



    </header>
  )
}