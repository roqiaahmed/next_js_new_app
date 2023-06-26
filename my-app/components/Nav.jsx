"use client"
import logo from '@public/assets/images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from 'react';

function Nav() {

    const { data: session } = useSession()
    const [providers, setProviders] = useState([]);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(()=> {
      const setUpproviders = async () => {
        const res = await getProviders();
        console.log(res);
        setProviders(res);
      }
      setUpproviders();
    },[])
    
  return (
    <nav className='navbar flex-between w-full mb-16 pt-3'>
        <Link  href="/" className='flex gap-2 flex-center'>
            <Image src={logo} alt="logo" width={40} height={40} className='object-contain'/>
            <p 
            className='logo_text absolute left-[55px] top-[4px]'
            > promptopia</p>
        </Link>
        {/* {alert(providers)} */}
        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
          {session?.user ? (
            <div 
            className='fixed right-[81px] gap-3 md:gap-5'
            >
              <Link className='black_btn' href="/creat-prompt">
                creat post
              </Link>
              <button onClick={() => signOut()} className='outline_btn'>signOut</button>
              <Link href="/profile">
                <Image src={session?.user.image}
                width={27}
                height={27}/>
              </Link>
            </div>
          ):
          (<>
          {providers && Object.values(providers).map((provider) => (
            <button className='black_btn' type='button' key={provider.name} onClick={()=> signIn(provider.id)}>signIn</button>
          ))}
          </>)}
        </div>

         {/* phone Navigation */}
        <div className='sm:hidden flex relative'>
              {session?.user ? (
                
                    <div className='flex'>
                    <Image
                      src={session?.user.image}
                      width={37}
                      height={37}
                      className='rounded-full'
                      alt='profile'
                      onClick={() => setToggleDropdown(!toggleDropdown)}
                    />
                    {toggleDropdown && (
                      <div className='dropdown'>
                        <Link className='dropdown_link' href="/profile" onClick={() => setToggleDropdown(false)}>profile</Link>
                        <Link className='dropdown_link' href="/creat-prompt" onClick={() => setToggleDropdown(false)}>creat post</Link>
                        <button type='button' onClick={()=>{signOut(); setToggleDropdown(false);}} className='mt-5 w-full black_btn'>signOut</button>
                      </div>
                    )}
                    </div>
              ):(<>{providers && Object.values(providers).map((provider)=> (
              <button className='black_btn' type='button' key={provider.name} onClick={()=> signIn(provider.id)}>signIn</button>
            ))}</>)}
        </div>
    </nav>
  )
}

export default Nav
