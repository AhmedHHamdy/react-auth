import { Link, useNavigate, Navigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthProvider"

export default function Signup() {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/

    const { token } = useAuth()

    const [errMsg, setErrMsg] = useState('')

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
    })

    const navigate = useNavigate()

    if (token) {
        console.log(token)
        return <Navigate to="/products" />
    }


    const [validPassword, setValidPassword] = useState(false);
    const [validMatch, setValidMatch] = useState(false)
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: value
          }
        })
    
        if (name === "password") {
          const isPasswordValid = PWD_REGEX.test(value);
          setValidPassword(isPasswordValid);
        } else if (name === "password_confirmation") {
          setValidMatch(value === formData.password);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
    
          if (!validPassword) {
            setErrMsg('Password must contain at least one lowercase letter, one uppercase letter, one digit, and be between 8 and 24 characters in length.')
            return
          }
    
          if (!validMatch) {
            setErrMsg('Passwords do not match')
            return;
          }
    
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/register`, formData)
          const data = response.data.data

          setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: ''
          })
    
          if (data.token) {
            navigate("/login")
          }
    
        } catch (err) {
          console.error(err.response.data.message);
          setErrMsg(err.response.data.message)
        }
    }


  return (
    <section className="bg-gray-50 md:pt-0 min-[320px]:pt-28 sm:pt-20 lg:pt-0">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up to Makkok
                </h1>
                <p className="text-red-600" aria-live="assertive">{errMsg}</p>

                <form className=" md:space-y-6 grid grid-cols-1 md:grid-cols-2 gap-4 mt-0" onSubmit={handleSubmit}>
                    <div className="self-end">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                        <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First Name"
                        required
                        onChange={handleChange} 
                        value={formData.first_name}
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last Name"
                        required
                        onChange={handleChange} 
                        value={formData.last_name}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                        onChange={handleChange} 
                        value={formData.email}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="01055555555"
                        required
                        onChange={handleChange} 
                        value={formData.phone}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={handleChange} 
                        value={formData.password}
                        />
                    </div>

                    <div>
                        <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required 
                        onChange={handleChange} 
                        value={formData.password_confirmation}
                        />
                    </div>

                    <button className="w-full text-white bg-[#03506f] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Create an account
                    </button>

                    <p className="self-center text-sm font-light text-gray-500 dark:text-gray-400">
                        Have an account yet? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                    </p>
                    </form>

            </div>
        </div>
    </div>
</section>
  )
}