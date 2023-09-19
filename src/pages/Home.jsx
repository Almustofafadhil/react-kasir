import MainFooter from "../components/Navigasion/MainFooter"
import MainNavbar from "../components/Navigasion/MainNavbar"
import Kategori1 from "../components/ProdukHome/Kategori1"
import Kategori2 from "../components/ProdukHome/Kategori2"
import MainHome from "../components/ProdukHome/MainHome"

function Home() {
  return (
    <div>  
        <MainNavbar />
        <MainHome />
            <hr className='mt-20 ml-[5%] w-[71.2rem] p-[1px] bg-black'/>
        <Kategori1 />
        <Kategori2 />
        <hr className='mt-20 ml-[5%] w-[71.2rem] p-[1px] bg-black'/>
        <div className='mt-20'>
        <MainFooter />
        </div>
    </div>
  )
}

export default Home