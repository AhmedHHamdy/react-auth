import { Link, useNavigate, Navigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthProvider"
import axios from "axios"
import "../App.css"

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { setToken, token } = useAuth()

    if (token) {
        console.log(token)
        return <Navigate to="/products" />
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: value
          }
        })
    }



    async function handleSubmit(event) {
        event.preventDefault()
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/login`, formData)
          const data = response.data.data
          console.log(response)
          
          setToken(data.token)
      
          if (data.token) {
            navigate('/dsfds')
          }
    
        } catch (err) {
            console.log(err)
        }
    
    }
    



  return (
        <section className="bg-gray-50 md:pt-0 min-[320px]:pt-28 sm:pt-20 lg:pt-0">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign in to your account
                      </h1>
                      <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="username" id="email" onChange={handleChange} value={formData.username} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                          </div>

                          <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" name="password" id="password" placeholder="••••••••" onChange={handleChange} value={formData.password} required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                          </div>

                          <button  className="w-full text-white bg-[#03506f] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Don’t have an account yet? <Link to="signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
      </section>
  )
}