import { useEffect, useState } from "react"
import Product from "../components/Product"
import { useAuth } from "../context/AuthProvider"
import axios from "axios"

export default function Products() {
  const [dummyData, setDummyData] = useState([])

  const [loadingStatus, setLoadingStatus] = useState(true)
  const [error, setError] = useState(null)

  const { token } = useAuth()

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