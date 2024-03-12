import { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Success from './Success';
export default function Order(props){
  const {handleInputChange,handleCheckboxChange, checkError, formData, isValid, errors}=props

  const [count,setCount]=useState(0);
  const malzemeler=[
   "Pepperoni",
   "Sosis",
   "Kanada Jambonu",
   "Tavuk Izgara",
   "Soğan",
   "Domates",
   "Mısır",
   "Jalepeno",
   "Sarımsak",
   "Biber",
   "Sucuk",
   "Ananas",
   "Kabak",
  ];
 function arttir(){setCount(count + 1);}
   function azalt(){setCount(count - 1);}
   const history= useHistory();
   const handleSubmit =  async(e) => {
    e.preventDefault();
    if(!isValid) return;
      try {
        
      const response = await axios.post('https://reqres.in/api/pizza', formData);
        history.push("/success");
        
      console.log('API Response:', response.data);

      } catch (error) {
        console.error('API Request Error:', error);
        alert("Internete Bağlanılamadı !!!")
      } 

  };

    return(
        <>
        <div className="flex justify-center bg-red-600 " >
      <h1 className=' text-white py-8 font-bold text-3xl'>Teknolojik Yemekler</h1></div>

      <div className="flex justify-center bg-red-600 text-white" >
       <nav>
        <Link to={"/"}>Anasayfa -</Link>
        <a href="">Seçenekler - </a>
        <a href="">Sipariş Oluştur</a>
        </nav>
        
         </div>


         <div className="flex flex-row">
  <div className="basis-1/3"></div>



  <form onSubmit={handleSubmit} className="basis-1/3 my-6">
    
    <h3 className="mb-6 font-semibold text-xl">Position Absolute Acı Pizza</h3>

  <div className="flex justify-between mb-4"><p className=" font-bold text-3xl">85.50tl</p>

  <div className="flex gap-11">
  <p className="text-gray-500">4.9</p>
  <p className="text-gray-500">(200)</p>
  </div>
  
  </div>
  <p className="mb-4 text-gray-500 ">Frontent Dev olarak hala position:absolute kullanıyorsan çok acı pizza tam sana göre.
    Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış daha sonra 
    Frontent Dev olarak hala position:absolute kullanıyorsan çok acı pizza tam sana göre.
    Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış daha sonra
  </p>
   
<div className="flex justify-between mb-4">
  
<div className="flex flex-col">
  <h2 className="font-semibold text-xl">Boyut Seç <span className="text-red-500">*</span></h2>
        <label>
            <input data-cy="kücük" onChange={handleInputChange} type="radio" name="boyut" value="kücük"/>
            Küçük
        </label>

        <label>
            <input onChange={handleInputChange} type="radio" name="boyut" value="orta"/>
            Orta
        </label>

        <label>
            <input onChange={handleInputChange} type="radio" name="boyut" value="buyuk"/>
            Büyük
        </label>
    </div>
    <div className="flex flex-col">
  <h2 className="font-semibold text-xl">Hamur Seç <span className="text-red-500">*</span></h2>
       
        <select onChange={handleInputChange}  id="hamur" name="hamur">
            <option >Hamur Kalınlığı</option>
            <option  value="kalın">Kalın Hamur </option>
            <option  value="ince">İnce Hamur</option>
            
        </select>
    </div>
</div>
<h3 className="font-semibold text-xl">Ek Malzemeler</h3>
<p className="mb-4 text-gray-500 ">En fazla 10 malzeme seçebilirsiniz. 5 tl</p>


<div className="grid md:grid-cols-3 grid-cols-2">
  
    {malzemeler.map((malzeme, index) => (
  <label key={index}><input className='check' type="checkbox" checked={formData.ekMalzemeler.includes(malzeme)} name="malzeme"
 onChange={() => handleCheckboxChange(malzeme)}
  
  />{malzeme}</label>
))}

        
  </div>
  {checkError &&(<span style={{color:"red"}}>"Lütfen en az 4 ve en fazla 10 malzeme seçiniz."</span>) }
<div className="mt-6">
  
  <div className="flex flex-col">
    <h2 className="font-semibold text-xl">İsim</h2>
      <input data-cy="name" name='isim' value={formData.isim} onChange={handleInputChange} type="text" className="border m-2 p-2 w-80" placeholder="Adınızı Giriniz"  />
      {errors.isim &&(<span style={{color:"red"}}>"Lütfen 3 karakterden fazla giriniz"</span>) }
     
    <h2 className="font-semibold text-xl">Sipariş Notu</h2>
      <input  type="text" className="border m-2 p-2 w-80" placeholder="Siparişine eklemek istediğin bir not var mı ?"  />
    
    
  </div>

</div>
<div className="border"></div>

<div className="flex flex-row justify-between my-6">
  <div>
    <div className="flex flex-row ">
    <a className="p-3 bg-yellow-400 rounded-l-lg" onClick={azalt}>-</a>
    <p className="border p-3">{count}</p>
    <a className="p-3 bg-yellow-400 rounded-r-lg" onClick={arttir}>+</a>
  </div>
  </div>
  

  <div className="border w-64">
    <div className="flex flex-col p-4">
      <h3 className="font-semibold">Sipariş Toplamı</h3>
      <div className="flex flex-row justify-between"><p>Seçimler</p>
      <p>25.00tl</p>
      </div>
      <div className="flex flex-row justify-between"><p>Toplam</p>
      <p>110.50tl</p>
      </div>
      
      
  </div>
  
  <div><button type='submit' data-cy="submit" disabled={!isValid} className="p-3 bg-yellow-400 rounded-md w-full font-semibold">SİPARİŞ VER</button></div>
  
  
</div>

    </div>


    
  
  </form>

  <div className="basis-1/3"></div>
</div>
    
        
        </>
    );
}