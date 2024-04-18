import {Link } from 'react-router-dom';
import logo from "../Assets/mile1-assets/logo.svg";
import menu1 from "../Assets/mile2-aseets/icons/1.svg";
import menu2 from "../Assets/mile2-aseets/icons/2.svg";
import menu3 from "../Assets/mile2-aseets/icons/3.svg";
import menu4 from "../Assets/mile2-aseets/icons/4.svg";
import menu5 from "../Assets/mile2-aseets/icons/5.svg";
import menu6 from "../Assets/mile2-aseets/icons/6.svg";
import food1 from "../Assets/mile2-aseets/pictures/food-1.png";
import food2 from "../Assets/mile2-aseets/pictures/food-2.png";
import food3 from "../Assets/mile2-aseets/pictures/food-3.png";
import logoFooter from "../Assets/mile2-aseets/footer/logo-footer.svg";
import icon1 from "../Assets/mile2-aseets/footer/icons/icon-1.png";
import icon2 from "../Assets/mile2-aseets/footer/icons/icon-2.png";
import icon3 from "../Assets/mile2-aseets/footer/icons/icon-3.png";
import li0 from "../Assets/mile2-aseets/footer/insta/li-0.png";
import li1 from "../Assets/mile2-aseets/footer/insta/li-1.png";
import li2 from "../Assets/mile2-aseets/footer/insta/li-2.png";
import li3 from "../Assets/mile2-aseets/footer/insta/li-3.png";
import li4 from "../Assets/mile2-aseets/footer/insta/li-4.png";
import li5 from "../Assets/mile2-aseets/footer/insta/li-5.png";
function Home() {
 

  return (
    <>
      <div className="basis-2/7 bg-[url('../Assets/mile1-assets/home-banner.png')] bg-cover bg-center w-screen h-screen justify-center flex text-center">
      <header className="flex flex-col mt-20">
        
        <img
          className="mb-10"
          src={logo}
        />

        <h2 className="font-specimen text-6xl text-white font-light mb-10">KOD ACIKTIRIR <br /> PIZZA, DOYURUR</h2>
         <Link to="/order">
        <button data-cy="aciktim" className=" bg-yellow-400 py-3 mx-auto w-48 rounded-full text-black font-medium">
          
          ACIKTIM</button></Link>
        </header> 
        
      </div>
      <section className="w-full">
    <nav className="flex items-center justify-between p-6 mx-12">
        <a href="#kore" className="flex items-center space-x-2">
            <img src={menu1} alt='kore' className="w-6 h-6"/>
            <span>YENİ! Kore</span>
        </a>
        
        <a href="#pizza" className="flex items-center space-x-2">
            <img src={menu2} alt='pizza' className="w-6 h-6"/>
            <span>Pizza</span>
        </a>
        <a href="#burger" className="flex items-center space-x-2">
            <img src={menu3} alt='burger' className="w-6 h-6"/>
            <span>Burger</span>
        </a>
        <a href="#kızartmalar" className="flex items-center space-x-2">
            <img src={menu4} alt='kızartmalar' className="w-6 h-6"/>
            <span>Kızartmalar</span>
        </a>
        <a href="#fast" className="flex items-center space-x-2">
            <img src={menu5} alt='fast' className="w-6 h-6"/>
            <span>Fast food</span>
        </a>
        <a href="#gazli" className="flex items-center space-x-2">
            <img src={menu6} alt='gazli' className="w-6 h-6"/>
            <span>Gazlı İçecek</span>
        </a>
    </nav>
</section>
      <div className="basis-4/7 bg-gray-100">
        <main  >
          
        <div className="flex gap-4 justify-center ml-96 py-24">
          <div className="border rounded-lg bg-[url('../Assets/mile2-aseets/cta/kart-1.png')] bg-cover w-1/3 bg-center  h-96 " >
            <p className='font-quat text-white text-6xl ml-6 mt-8'>Özel <br /> Lezzetus</p>
            <p className=' text-white ml-6'>Position:Absolute Acı Burger</p>
            <button className='bg-white border-2 ml-6 border-red-500 mt-4 font-bold rounded-full text-red-500 px-4 py-2 cursor-pointer'>SİPARİŞ VER</button>
          </div>

          <div className='flex flex-col gap-4 w-2/3'>
          <div className="border h-1/2 p-4 rounded-lg bg-[url('../Assets/mile2-aseets/cta/kart-2.png')] bg-cover w-2/4 bg-center ">

            <p className='font-barlow text-3xl text-white'> Hackathlon <br />Burger Menü</p>
            <button className='bg-white border-2 mt-5 rounded-full text-red-500 px-4 py-2 cursor-pointer'>SİPARİŞ VER</button>
          </div>
          <div className="border rounded-lg bg-[url('../Assets/mile2-aseets/cta/kart-3.png')] bg-cover w-2/4 bg-center  h-1/2 p-4">
            <p className='font-barlow text-3xl text-white'> <span className='text-red-500'>Çooooook</span> <span className='text-black'>hızlı</span> <br /><span className='text-black'>npm gibi kurye</span></p>
            <button className='bg-white border-2 mt-5 rounded-full text-red-500 px-4 py-2 cursor-pointer'>SİPARİŞ VER</button>
          </div>
        </div>
        
          </div>

            <div className=' text-center flex flex-col gap-4 pb-8'> 
           <p className='font-satisfy text-red-600'>en çok paketlenen menüler</p>
           <p className='font-roboto text-3xl '>Acıktıran Kodlara Doyuran Lezzetler</p>
            </div>
         
         <nav className="flex items-center justify-center gap-20 p-6 ">
        <a href="#kore" className="hover:bg-gray-900 hover:text-white font-roboto flex items-center space-x-2 bg-white  rounded-full px-4 p-5 cursor-pointer">
            <img src={menu1} alt='kore' className="w-6 h-6"/>
            <span>YENİ! Kore</span>
        </a>
        
        <a href="#pizza" className="hover:bg-gray-900 hover:text-white font-roboto flex items-center space-x-2 bg-white  rounded-full px-4 p-5 cursor-pointer">
            <img src={menu2} alt='pizza' className="w-6 h-6"/>
            <span>Pizza</span>
        </a>
        <a href="#burger" className="hover:bg-gray-900 hover:text-white font-roboto flex items-center space-x-2 bg-white  rounded-full px-4 p-5 cursor-pointer">
            <img src={menu3} alt='burger' className="w-6 h-6"/>
            <span>Burger</span>
        </a>
        <a href="#kızartmalar" className="hover:bg-gray-900 hover:text-white font-roboto flex items-center space-x-2 bg-white  rounded-full px-4 p-5 cursor-pointer">
            <img src={menu4} alt='kızartmalar' className="w-6 h-6"/>
            <span>Kızartmalar</span>
        </a>
        <a href="#fast" className="hover:bg-gray-900 hover:text-white font-roboto flex items-center space-x-2 bg-white  rounded-full px-4 p-5 cursor-pointer">
            <img src={menu5} alt='fast' className="w-6 h-6"/>
            <span>Fast food</span>
        </a>
        <a href="#gazli" className="hover:bg-gray-900 hover:text-white font-roboto flex items-center space-x-2  bg-white  rounded-full px-4 p-5 cursor-pointer">
            <img src={menu6} alt='gazli' className="w-6 h-6"/>
            <span>Gazlı İçecek</span>
        </a>
    </nav>

      <div className='flex flex-row justify-center gap-8 pt-8 pb-32'>
        
        <div className=" max-w-md  bg-white rounded-md p-4 shadow-md">
          <img src={food1} className='w-full h-auto rounded-md'/>
          <p className='font-roboto text-lg font-bold' >Terminal Pizza</p>
          <div className='flex justify-between'>
            <p className='text-gray-500'>4.9</p>
            <p className='text-gray-500'>(200)</p>
            <p className='font-bold'>60tl</p>
          </div>
          
        </div>
        <div className=" max-w-md bg-white rounded-md p-4 shadow-md">
          <img src={food2} className='w-full h-auto rounded-md'/>
          <p className='font-roboto text-lg font-bold' >Position Absolute Acı Pizza</p>
          <div className='flex justify-between'>
            <p className='text-gray-500'>4.9</p>
            <p className='text-gray-500'>(928)</p>
            <p className='font-bold'>85tl</p>
          </div>
        </div>
        <div className=" max-w-md  bg-white rounded-md p-4 shadow-md">
          <img src={food3} className='w-full h-auto rounded-md'/>
          <p className='font-roboto text-lg font-bold' >useEffect Tavuklu Burger</p>
          <div className='flex justify-between'>
            <p className='text-gray-500'>4.9</p>
            <p className='text-gray-500'>(462)</p>
            <p className='font-bold'>75tl</p>
          </div>
        </div>
         

      </div>

        </main>
      
        
      </div>
      <div className="basis-1/7 bg-gray-900 h-96">
        <footer className=' flex flex-row justify-center flex-wrap gap-9'>
        <div className=' h-64 w-52 mt-14  '>
        <img src={logoFooter} className='w-full h-auto rounded-md'/><br />
        <p className='flex flex-row  text-xs text-white mt-3 gap-3' ><img src={icon1} /><span>341 London Road,İstanbul Türkiye</span></p>
        <p className='flex flex-row  text-xs text-white mt-3 gap-3' ><img src={icon2} /><span>aciktim@teknolojikyemekler.com</span></p>
        <p className='flex flex-row  text-xs text-white mt-3 gap-3' ><img src={icon3} /><span>+90 216 123 45 67</span></p>
        </div>

        <div className='flex justify-between gap-96'>
        <div className='h-64 w-52 mt-20'>
          <p className='font-roboto text-lg font-bold pb-8 text-white'>Sıcacık Menuler</p>
          <p className='text-white text-sm '>Terminal pizza</p>
          <p className='text-white text-sm mt-2'>5 Kişilik Hackathlon Pizza</p>
          <p className='text-white text-sm mt-2'>useEffect Tavuklu Pizza</p>
          <p className='text-white text-sm mt-2'>Beyaz Console Frasty</p>
          <p className='text-white text-sm mt-2'>Testler Geçti Mutlu Burger</p>
          <p className='text-white text-sm mt-2'>Position Absolute Acı Burger</p>
        </div>
        <div className=' h-48 w-72 mt-20'>
          <p className='font-roboto text-lg font-bold pb-8 text-white'>Instagram</p>
      <div className='flex flex-row flex-wrap gap-2'>
          <img src={li0} alt='kızartmalar' className="w-20 h-20"/>
          <img src={li1} alt='kızartmalar' className="w-20 h-20"/>
          <img src={li2} alt='kızartmalar' className="w-20 h-20"/>
          <img src={li3} alt='kızartmalar' className="w-20 h-20"/>
          <img src={li4} alt='kızartmalar' className="w-20 h-20"/>
          <img src={li5} alt='kızartmalar' className="w-20 h-20"/>
        </div>
        </div>


        </div>
        
          
        </footer>
        
        
      </div>
       
        
    </>
  )
}

export default Home
