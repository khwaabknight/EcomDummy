import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Overlay from './Overlay';
import ProfileDrawer from './ProfileDrawer';
import Avatar from '../common/Avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from 'react-icons/io5';

const links = [
  {
    id:1,
    name: 'Home',
    path: '/products'
  },
  {
    id:2,
    name: 'Cart',
    path: '/cart'
  },
  {
    id:3,
    name: 'DummyLink1',
    path: '/dummylink'
  },
]

const Navbar = ({children}) => {

  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const navigate = useNavigate();

  const closeHandler = () => setShowModal(false)

  useEffect(() => {
    axios.get('https://dummyjson.com/auth/me',{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => {
      // console.log(res)
      setUser(res.data);
    })
    .catch((error) => {
      console.log("error:",error)
      if (error.response.status !== 200) {
        localStorage.removeItem('token');
        navigate('/');
      }
    });
  },[navigate])

  return (
    <div className={clsx('flex flex-col items-center h-full',window.location.pathname === '/' && 'hidden')}>
      <nav className={clsx('w-full justify-center bg-gray-900 h-16 flex z-40')}>
        <div className='flex justify-between w-10/12 gap-3
         p-1 opacity-90'>
          <div 
            className='md:hidden flex justify-center items-center text-gray-200'
            onClick={() => setDrawer(true)}
          >
            <RxHamburgerMenu size={24}/>
          </div>
          <div className='md:flex hidden items-center gap-3'>
            <img src="/online-shopping.png" alt='logo' width={30}/>
            <p className='text-xl text-gray-200 select-none'>DummyEcom</p>
          </div>
          <ul className={clsx('md:flex justify-center items-center gap-3 hidden')}>
            {
              links.map((link) => (
                <li key={link.id} className={clsx(`text-xl text-gray-200 select-none px-5 py-3 rounded-md hover:scale-105 hover:bg-gray-700`, window.location.pathname === link.path && "text-gray-300 bg-gray-600")}>
                  <NavLink to={link.path}>{link.name}</NavLink>
                </li>
              ))
            }
          </ul>
          <div className='flex justify-center items-center '>
            <button onClick={() => setShowModal(true)}>
              <Avatar imgsrc={user?.image}/>
            </button>
          </div>
        </div>
      </nav>

      <Overlay showModal={drawer} closeHandler={() => setDrawer(false)}>
        <div className='pointer-events-auto w-screen max-w-md overflow-y-hidden'>
          <div className='flex h-full flex-col overflow-y-hidden bg-gray-900 py-6 shadow-xl'>
            <div className="px-4 sm:px-6">
                <div className="flex items-start justify-end">
                    <div className="ml-3 flex h-7 items-center">
                        <button onClick={() => setDrawer(false)} type="button" className="rounded-md m-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:scale-125 focus:ring-offset-2 transition-transform">
                            <IoClose size={24}/>                            
                        </button>
                    </div>
                </div>
            </div>
            <ul className={clsx('flex-col justify-center items-center gap-3')}>
                {
                  links.map((link) => (
                    <li key={link.id} className={clsx(`text-xl text-gray-200 select-none px-5 py-3 hover:bg-gray-700`, window.location.pathname === link.path && "text-gray-300 bg-gray-600")} >
                      <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                  ))
                }
            </ul>
          </div>
        </div>
      </Overlay>

      <Overlay showModal={showModal} closeHandler={closeHandler}>
          <ProfileDrawer closeHandler={closeHandler} user={user}/>
      </Overlay>
    </div>
  )
}

export default Navbar