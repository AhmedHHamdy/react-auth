import axios from "axios"
import "../App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Product(props) {


  function handleDelete() {
    axios.delete(`https://dummyjson.com/products/${props.id}`)
         .then(res => {
          console.log(res)
          toast.success(`${res.data.title} deleted`)
          toast.success(`isDeleted Attribute of the response: is ${res.data.isDeleted}, check the console`)
          // window.location.reload()
         })
         .catch(err => {
          console.log(err)
         })
  }


  return (
    <section className="shadow-[0px_3px_14px_#03506f59] flex flex-col justify-center p-6">
      <ToastContainer />
      <img className="w-13" src={props.image} alt="product-image" />
      <div className="flex justify-between items-center p-6">
        <h2 className="text-3xl capitalize">{props.name}</h2>
        <h3 className="text-2xl">EGP {props.price}</h3>
      </div>
      <button className="bg-[#03506f] text-white py-2 px-4 rounded-3xl self-center hover:bg-[#1a154a]" onClick={handleDelete}>Delete</button>
    </section>
  )
}