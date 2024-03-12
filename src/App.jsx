import Order from "./components/Order"
import Home from "./components/Home"
import Success from "./components/Success"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {useState,useEffect} from "react";

import axios from "axios";
function App() { 

  
  const [formData, setFormData] = useState({
    baslik:"Position Absolute Acı Pizza",
    boyut:"",
    hamur:"", 
    isim: '',
    ekMalzemeler: [],
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({isim:false,checkbox:false});

  const [checkError,setCheckError]= useState(false);
  
    
  

const handleCheckboxChange = async (malzeme) => {
  const { ekMalzemeler } = formData;

  // Malzeme zaten seçiliyse kaldır, değilse ekleyerek güncelle
  const updatedMalzemeler = ekMalzemeler.includes(malzeme)
    ? ekMalzemeler.filter((item) => item !== malzeme)
    : [...ekMalzemeler, malzeme];

  setFormData((prevFormData) => ({
    ...prevFormData,
    ekMalzemeler: updatedMalzemeler,
  }));

  // Validasyon: En az 4 malzeme seçilmiş olmalı, en fazla 10 malzeme seçilebilir
  if (formData.ekMalzemeler.length >= 3 && formData.ekMalzemeler.length <= 10) {
    setCheckError(false);
    // Formu gönderme veya başka bir işlem yapma
    console.log('Seçilen malzemelerle birlikte gönderilen form:', formData.ekMalzemeler);
  } else {
    // Hata mesajı veya başka bir geri bildirim mekanizması
    setCheckError(true);
    console.error('Lütfen en az 4 ve en fazla 10 malzeme seçiniz.');
  }
};



  const handleInputChange = (event) => {
   const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if(name=="isim"){
   if(value.trim().length>=3){
      setErrors({...errors, [name]:false});
    }else{
      setErrors({...errors, [name]:true});
    }}

  };

  
  

useEffect(()=>{
    if(formData.isim.length>=3 && (formData.ekMalzemeler.length >= 4 && formData.ekMalzemeler.length <= 10)){
      setIsValid(true);
    }else{
      setIsValid(false);
    }
  },[formData]);

  
  return ( 
    <Router>

      <Route path="/" exact><Home/></Route>
      <Route path="/order"><Order handleInputChange={handleInputChange}
      handleCheckboxChange={handleCheckboxChange} checkError={checkError} formData={formData} isValid={isValid} errors={errors}/></Route>
      <Route path="/success"><Success formData={formData}/></Route>

    </Router>
  )
}

export default  App
