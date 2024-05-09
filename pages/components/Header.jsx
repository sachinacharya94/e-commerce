
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiOutlineLogin } from "react-icons/hi";
import { IoPersonAdd } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { logout } from '../api/userAPI';
import { useRouter } from 'next/navigation';


const Header = () => {
    let [user,setUser] = useState({})

    useEffect(()=>{
            getUser()
            .then(data =>setUser(data))

            async function getUser(){
                user = await JSON.parse(localStorage.getItem('jwt'))?.user
                return user
            }
    },[])

    let router = useRouter()

    const handleLogout = ()=>{
        logout()
        .then(data=>{
            if(data.msg){
                router.push('/')
            }
        })
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <div className='grid md:grid-cols-4 md:w-[80%] bg-slate-600 mx-auto mt-1 text-white'>
            <div className='col-span-1 '>
                <h1 className='text-3xl text-center py-1'><Link href={'/'} >Evolve Store</Link> </h1>
            </div>
            <div className='col-span-2 flex py-2 px-4'>
                <input type="search" className='w-full rounded-none rounded-l-md text-black px-2 outline-none' />
                <button type='warning' className='text-white rounded-none rounded-r-md'>Search</button>
            </div>
            <div className='col-span-1 flex justify-evenly text-3xl items-center'>

            {
                    user ?  (user.role === 'admin' ? <><RxDashboard/> <span onClick={handleLogout}>  <AiOutlineLogout/> </span></>  : <><CgProfile/> <span onClick={handleLogout}>  <AiOutlineLogout/> </span> </>) :
                    <>
                    <Link href={'/login'}><HiOutlineLogin/> </Link>
                    <Link href={'/register'}><IoPersonAdd/> </Link>
                    </>
                }


                

                
                

                <Link href={'/cart'}><FiShoppingCart/> </Link>

            </div>
        </div>
        <ul className='list-none md:flex justify-evenly py-2 md:w-[80%] mx-auto bg-slate-300'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/products"}>Products</Link></li>
            <li><Link href={"/services"}>Services</Link></li>
            <li><Link href={"/faqs"}>FAQs</Link></li>
            <li><Link href={"contact"}>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Header