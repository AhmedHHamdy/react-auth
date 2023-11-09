import { useEffect, useState } from "react"
import Product from "../components/Product"
import { useAuth } from "../context/AuthProvider"
import axios from "axios"

export default function Products() {
  const [dummyData, setDummyData] = useState([])

  const [loadingStatus, setLoadingStatus] = useState(true)
  const [error, setError] = useState(null)



  const { token } = useAuth()

  // I used this token to get the dummy data because using the user's token will result in an empty dummy data, but the implementation stays the same
  // If you want to test the use's data, just uncomment the const {token} but you will recive no data
  // let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDY1OThlOTUyOGY4OGYwYjJiZTRmNmY4NDJkNjc5YjE3YTg3OGMyY2NhYzFmNGMzYzQ1NDgzNjc3YWM4MTlmNmI2NTRjZWQyNThkNzEwMzQiLCJpYXQiOjE2OTk0ODkyNzEuMDc1MDg1LCJuYmYiOjE2OTk0ODkyNzEuMDc1MDg4LCJleHAiOjE3MzExMTE2NzEuMDQ5MzQ5LCJzdWIiOiIzNSIsInNjb3BlcyI6W119.odR5sQ-3dRjWIjBIMTBIkGHZ170bZwz6pD7CsU7LyuyrsIv9wXEw-7gnrVt03MY4VgPZjIJ4aenv_ENyy_RH3D41O92SwnEC4yL6bwcbu3jCOKFfQKV3OcuDpoc_A6I6imTbrHMrgBMG9asVzo20UwSTh8Vz28zGUj8PkMC_KMRjXEypUvdCqfbjTNEH0125GigKjHs27BGNtqz6Z_ULkaDFMO88ajnMjI-CE8LMCJTJSYRyQk-8vFvrJJstS0rm_hhME8kOnAIwrvzV-NsMyzVMTpRvnkgsF-KgVHGkIv_IIrvggLsV8Ggo1c3WE7LgKZC9Bief-6abmyRA-huuliSs5bGqLF5G4V0rck0WUbeo9z2TaxzkDWOhsSvTn268Yw7aDCGmkkHiVtJJTuhguqVyKO7DDhtvlmlDV0TRLK9wBeCEsJbNzaEbu-Wrzuo9wFWOt321gVkDasocv-SjTY69dutl0g0TSPRIIPQEIwLLhlw5j0FBK2BAHHe1bAG7Yb7Bx7ZNEaOJ4iSj0W8dZ2sfbUI98hX9bSNlMzh2amZq5EfsMhvYmn0Th-2VkZ9p-GF5Uu1UWgpZ3CeVWSwr8oajRyzis6nGq7Tgw0KpYcWVsaZs6ODn-RsZM9sDyDjc0VzrhKETusk62CHLIbGqo9Zt4ua3fZKF59Q7irYbDLA"



  useEffect(() => {
    async function getDummyData() {
      axios.get("https://dummyjson.com/products")
          .then(res => {
            setLoadingStatus(false)
            console.log(res)
            setDummyData(res.data.products)
            console.log(dummyData)
          })
          .catch(err => {
            setLoadingStatus(false)
            console.log(err)
            setError(err.message)
          })
    }
    getDummyData()
  }, [])

  const productsElements = dummyData.map(p => {
    return (<Product key={p.id} id={p.id} name={p.title} image={p.images[0]} price={p.price} />)
  })

  if (loadingStatus) {
    return (
    <div className="flex justify-center items-center pt-40">
      <span className="loading loading-spinner loading-lg"></span>
    </div>)
  }

  if (error) {
    return (
      <div className="alert alert-error relative top-40 w-1/4 mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{error}</span>
      </div>
    )
  }



  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-6 pt-28 w-9/12 mx-auto">
      {productsElements}
    </section>
  )
}