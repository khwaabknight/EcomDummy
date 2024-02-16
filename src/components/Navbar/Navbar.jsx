import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Overlay from './Overlay';
import ProfileDrawer from './ProfileDrawer';
import Avatar from '../common/Avatar';
import clsx from 'clsx';

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
      <nav className={clsx('w-full justify-center bg-gray-900 h-16 hidden md:flex',)}>
        <div className='flex justify-between w-10/12 gap-3
         p-1 opacity-90'>
          <div className='flex items-center gap-3'>
            <img src="/online-shopping.png" alt='logo' width={30}/>
            <p className='text-xl text-gray-200 select-none'>DummyEcom</p>
          </div>
          <ul className='flex justify-center items-center gap-3'>
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
      <Overlay showModal={showModal} closeHandler={closeHandler}>
          <ProfileDrawer closeHandler={closeHandler} user={user}/>
      </Overlay>
    </div>
  )
}

export default Navbar