import React from 'react'
import { IoClose } from "react-icons/io5";
import Avatar from '../common/Avatar';
import { FaFemale, FaMale } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const ProfileDrawer = ({closeHandler,user}) => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        navigate('/');        
    }

  return (
    <div className='pointer-events-auto w-screen max-w-md overflow-y-hidden'>
        <div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
            <div className="px-4 sm:px-6">
                <div className="flex items-start justify-end">
                    <div className="ml-3 flex h-7 items-center">
                        <button onClick={closeHandler} type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:scale-125 focus:ring-offset-2 transition-transform">
                            <IoClose size={24}/>                            
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 flex-1 px-4 sm:px-6 text-gray-900">
                <div className="flex flex-col items-center gap-3">
                    <div className="">
                        <Avatar imgsrc={user.image} size="h-20 w-20"/>
                    </div>
                    <div className='text-3xl text-gray-600'>{user.firstName}, {user.age}</div>
                    {user.gender === 'female' && <div className='text-pink-500'><FaFemale size={20}/></div>}
                    {user.gender === 'male' && <div className='text-cyan-500'><FaMale size={20}/></div>}         

                    <div className="w-full pb-5 pt-5 sm:px-0 sm:pt-0 mt-10">
                        <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                            <div>
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                    {user.email}
                                </dd>
                            </div>

                            <hr />
                            <div>
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                    Joined
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                    {user.birthDate}
                                </dd>
                            </div>
                            <hr />
                            <div>
                                <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                    University
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                    {user.university}
                                </dd>
                            </div>
                        </dl>
                    
                    
                    </div>

                    <div className="flex gap-10 my-8">
                    <div 
                        onClick={logoutHandler}
                        className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                    >
                        <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                            <CiLogout size={20} />
                        </div>
                        <div className="text-sm font-light text-neutral-600">Logout</div>
                    </div>
                </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default ProfileDrawer