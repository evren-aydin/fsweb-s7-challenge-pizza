
import Order from "./Order";
import { useLocation } from "react-router-dom";
function Success(props) {
const {formData}= props;

  return (
    
<body className="bg-red-600 w-screen h-screen justify-center flex text-center">
    <div className="basis-1/3"></div>
    <div className="basis-1/3">

      <div className="flex mt-10 justify-center items-center flex-col">

        <img  src="../Assets/mile1-assets/logo.svg" alt="" />

        
        <p className="mt-12 font-specimen text-6xl text-white font-light mb-10 r">SİPARİŞ ALINDI</p>

        


        </div>
    <div className="border"></div>

    <div className="flex justify-center items-center flex-col" >
      <p className="text-white mt-8 text-2xl">{formData.baslik}</p>

      <div className="flex flex-col justify-start m-8">
        <p className="text-white mt-3 text-s" >Boyut: <span className="font-semibold">{formData.boyut}</span> </p>
        <p className="text-white mt-3 text-s" >Hamur: <span className="font-semibold">{formData.hamur}</span> </p>
        <p className="text-white mt-3 text-s" >Ek Malzemeler: <span className="font-semibold">{formData.ekMalzemeler.join(", ")}</span> </p>

      </div>
      <div className="border rounded-lg w-64">
    <div className="flex flex-col p-9">
      <h3 className="text-white font-semibold">Sipariş Toplamı</h3>
      <div className="text-white mt-4 flex flex-row justify-between"><p>Seçimler</p>
      <p>25.00tl</p>
      </div>
      <div className="text-white flex flex-row justify-between"><p>Toplam</p>
      <p>110.50tl</p>
      </div>
      
      
  </div></div>
      

    </div>
  
    </div>
    <div className="basis-1/3"></div>
    </body>
    
  )
}

export default Success