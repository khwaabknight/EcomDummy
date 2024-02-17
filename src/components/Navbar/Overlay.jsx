import React from 'react'

const Overlay = ({children,showModal,closeHandler}) => {
    if (!showModal) return null;

    const outsideClickHandler = (e) => {
        if(e.target.id === 'modalbg') closeHandler();
    }

  return (
    <div onClick={outsideClickHandler} id='modalbg' className='fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex justify-end z-50'>
        {children}
    </div>
  )
}

export default Overlay