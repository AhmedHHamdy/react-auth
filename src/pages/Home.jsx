import { Link } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs"
import giphy from "../assets/giphy.gif"
import "../App.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
  return (
    <>
      <section className="flex justify-between w-9/12 mx-auto pt-20 pb-28">
        <section>
          <h1 className="text-6xl font-semibold mt-32 leading-snug">Create Your Online <br/> Store In Minutes</h1>
          <p className="text-2xl font-normal mt-8 w-11/12">Own a professional store at the lowest costs and without sal...</p>
          <div className="flex justify-start items-center gap-6 mt-8">
            <Link className="md:text-base min-[320px]:text-base sm:text-base lg:text-base text-lg py-3 px-7 rounded-full bg-[#03506f] font-semibold text-white hover:bg-[#1a154a]">Create Your Store For Free</Link>
            <button className="md:flex min-[320px]:hidden sm:flex lg:flex flex justify-center items-center w-16 h-16 rounded-full bg-[#1a154a] hover:bg-[#03506f]" style={{animation: "rotate 6s ease-in-out infinite"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35.74" height="35.74" viewBox="0 0 35.74 35.74">
              <path d="M0,0H35.74V35.74H0Z" fill="none"/>
              <path d="M18.546,2A16.546,16.546,0,1,0,35.093,18.546,16.552,16.552,0,0,0,18.546,2ZM15.237,25.992V11.1l9.928,7.446Z" transform="translate(-0.676 -0.676)" fill="#fff"/></svg>
            </button>
          </div>
        </section>
        <section class="relative md:hidden min-[320px]:hidden sm:hidden lg:flex">
          <img src={giphy} alt="Planet" class="absolute w-28 animate-planet-one left-10 top-10 z-0" />
          <img src="https://makkok.com/website/web/images/large-rocket-2.png" className="animate-rocket w-10/12" alt="Rocket" />
          <img src="https://makkok.com/website/web/images/earth2.png" alt="Planet" class="absolute w-28 animate-planet-two z-0 bottom-20 z-[-10]" />
        </section>
      </section>


      <section className="bg-[#ececec] flex justify-between items-center flex-col">
        <div className="text-center relative w-full mt-10" data-aos="flip-up">
              <span className="md:hidden min-[320px]:hidden sm:hidden lg:inline absolute top-16 left-72 transform -rotate-45 text-1xl font-bold">join us</span>
              <h2 className="text-[2.7rem] font-[600] pt-16 " data-aos="flip-up">
                join Our Exclusive List Of Stores Created By Makko...</h2>
              <img className="md:hidden min-[320px]:hidden sm:hidden lg:inline absolute top-16 right-60 transform -rotate-270 text-1xl font-bold" src="https://makkok.com/website/web/images/rocket2.png" alt="rocket-icon" />
        </div>

          <section className="flex justify-between flex-row w-9/12 mx-auto mt-8">
            <section className="flex  flex-col items-start md:items-start min-[320px]:items-center sm:items-start lg:items-start  mt-12">

              <div className="flex justify-between md:flex-row min-[320px]:flex-col sm:flex-row lg:flex-row flex-row items-center gap-8 aos-init aos-animate" data-aos="zoom-in-left">
                
                <div className="shadow-[0px_3px_14px_#03506f59] bg-white flex justify-center items-center flex-col px-6 p-0 rounded-3xl w-44 h-44 aos-init aos-animate" data-aos="flip-up" data-aos-delay="100">
                <div className="bg-[#1a154a] p-2 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="43.396" viewBox="0 0 46 43.396"><rect width="46" height="43.396" fill="#1a154a"/><g transform="translate(2.005 3)"><path d="M43.791,15.237,41.586,6.158A4.116,4.116,0,0,0,37.574,3H8.4A4.115,4.115,0,0,0,4.41,6.158L2.2,15.237a6.953,6.953,0,0,0,1.3,5.983,8,8,0,0,0,.588.6V36.241A4.19,4.19,0,0,0,8.3,40.4H37.7a4.19,4.19,0,0,0,4.2-4.155V21.823a7.726,7.726,0,0,0,.588-.582A6.929,6.929,0,0,0,43.791,15.237Zm-6.28-8.1,2.205,9.079a2.794,2.794,0,0,1-.525,2.431,2.472,2.472,0,0,1-1.974.976,2.614,2.614,0,0,1-2.541-2.368l-1.218-10.1ZM25.1,7.155h4.117l1.134,9.391a2.773,2.773,0,0,1-.693,2.223,2.517,2.517,0,0,1-2,.852A2.655,2.655,0,0,1,25.1,16.9Zm-9.473,9.391,1.155-9.391H20.9V16.9a2.684,2.684,0,0,1-2.709,2.722,2.539,2.539,0,0,1-1.869-.852A2.93,2.93,0,0,1,15.625,16.546Zm-9.347-.332L8.4,7.155h4.138l-1.218,10.1a2.629,2.629,0,0,1-2.541,2.368,2.425,2.425,0,0,1-1.953-.976A2.724,2.724,0,0,1,6.279,16.213ZM8.3,36.241V23.713a3.841,3.841,0,0,0,.483.062,6.607,6.607,0,0,0,4.7-1.974,6.793,6.793,0,0,0,4.852,1.974,6.7,6.7,0,0,0,4.684-1.932,6.924,6.924,0,0,0,4.81,1.932,6.706,6.706,0,0,0,4.7-1.974,6.607,6.607,0,0,0,4.7,1.974,3.84,3.84,0,0,0,.483-.062V36.241Z" transform="translate(-2.005 -3)" fill="#fff"/></g></svg>                  
                </div>
                  <span className="text-[#03506f] capitalize font-semibold text-2xl">Markets</span>
                  <span className="text-[#03506f] capitalize font-semibold text-4xl">123</span>
                </div>

                <div className="shadow-[0px_3px_14px_#03506f59] bg-white flex justify-center items-center flex-col px-6 p-0 rounded-3xl w-44 h-44 aos-init aos-animate" data-aos="flip-up" data-aos-delay="100">
                  <div className="bg-[#1a154a] p-2 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"><path d="M0,0H55V55H0Z" fill="#1a154a"/><path d="M43.894,12.417H37.121V4H5.515A4.383,4.383,0,0,0,1,8.208V31.354H5.515a6.546,6.546,0,0,0,6.773,6.313,6.546,6.546,0,0,0,6.773-6.313H32.606a6.546,6.546,0,0,0,6.773,6.313,6.546,6.546,0,0,0,6.773-6.313h4.515V20.833Zm-1.129,3.156,4.425,5.26H37.121v-5.26ZM12.288,33.458a2.109,2.109,0,1,1,0-4.208,2.109,2.109,0,1,1,0,4.208ZM17.3,27.146a7.021,7.021,0,0,0-10.024,0H5.515V8.208H32.606V27.146Zm22.079,6.313a2.109,2.109,0,1,1,2.258-2.1A2.191,2.191,0,0,1,39.379,33.458Z" transform="translate(1.667 6.667)" fill="#fff"/></svg>
                  </div>
                  <span className="text-[#03506f] capitalize font-semibold text-2xl">Orders</span>
                  <span className="text-[#03506f] capitalize font-semibold text-4xl">637</span>
                </div>

                <div className="shadow-[0px_3px_14px_#03506f59] bg-white flex justify-center items-center flex-col px-6 p-0 rounded-3xl w-44 h-44 aos-init aos-animate" data-aos="flip-up" data-aos-delay="100">
                  <div className="bg-[#1a154a] p-2 rounded-2xl">
                   <svg xmlns="http://www.w3.org/2000/svg" width="47" height="43.519" viewBox="0 0 47 43.519"><path d="M0,0H47V43.519H0Z" fill="#1a154a"/><path d="M42.789,11.921V7.169A4.313,4.313,0,0,0,38.368,3H7.421A4.3,4.3,0,0,0,3,7.169V36.35a4.3,4.3,0,0,0,4.421,4.169H38.368a4.313,4.313,0,0,0,4.421-4.169V31.6A4.136,4.136,0,0,0,45,28.012V15.506A4.136,4.136,0,0,0,42.789,11.921Zm-2.211,3.585V28.012H25.105V15.506ZM7.421,36.35V7.169H38.368v4.169H25.105a4.313,4.313,0,0,0-4.421,4.169V28.012a4.313,4.313,0,0,0,4.421,4.169H38.368V36.35Z" transform="translate(0 0)" fill="#fff"/><circle cx="1.5" cy="1.5" r="1.5" transform="translate(30.381 20.259)" fill="#fff"/></svg>                  
                  </div>
                  <span className="text-[#03506f] capitalize font-semibold text-2xl">Transactions</span>
                  <span className="text-[#03506f] capitalize font-semibold text-4xl">189,861.58</span>
                </div>

              </div>

              <div className="flex flex-col justify-between items-start gap-6" data-aos="flip-up">
                <h3 className="text-3xl font-semibold mt-20">Join Our Client List Now</h3>
                <Link className="text-lg py-3 px-7 rounded-full bg-[#03506f] font-semibold text-white hover:bg-[#1a154a]">Create your Store Free</Link>
              </div>
            </section>

            <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="2500" className="self-end flex justify-end md:block min-[320px]:hidden sm:block lg:block">
              <img className="w-10/12 " src="https://makkok.com/website/web/images/join-section-img.webp" alt="website-images" loading="lazy"  />
            </div>
          </section>
        </section>
    </>
  )
}