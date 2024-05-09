import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'flowbite';
import { useEffect, useState } from "react";
import Sidebar from "./components/admin/Sidebar";

export default function App({ Component, pageProps }) {
  let[isAdmin, setIsAdmin] = useState()
  const router = useRouter()

  useEffect(()=>{
    getUser()
    .then(user =>{
      if (user.role==='admin'){
        setIsAdmin(true)
      }
      else{
        setIsAdmin(false)
      }
    })

    async function getUser(){
      return localStorage.getItem("jwt")?
      await JSON.parse(localStorage.getItem('jwt')).user:false
      
  }

  },[])

  return (
  <>
{
  isAdmin ?
  <div className="flex">

    <div className="w-1/4"><Sidebar/></div>
    <div className="w-3/4">
    <Component {...pageProps} />
    </div>
  </div>
  :
 <>
 <Header/>

<Component {...pageProps} />

<Footer />
 </>

}

 </> 
)
}
