import clsx from 'clsx';
import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";

const ViewSelection = ({view, setView,productsLength}) => {
  return (
    <div className='flex justify-between border-b border-gray-700 py-3'>

      {/* View */}
      <div className='flex items-center gap-5'>
        <button 
          className={clsx('p-1 flex justify-center items-center cursor-pointer rounded-sm', view === 'GRID' && "bg-gray-400 text-gray-800" )}
          onClick={() => setView('GRID')}  
        >
          <BsFillGridFill size={22} />
        </button>
        <button 
          className={clsx('p-1 flex justify-center items-center cursor-pointer rounded-sm', view === 'LIST' && "bg-gray-400 text-gray-800" )}
          onClick={() => setView('LIST')}
        >
          <BsList  size={22} />
        </button>
      </div>

      {/* Product Count */}
      <div className=" text-gray-300 p-2">
        <p className='select-none'>{`${productsLength} Product Available`}</p>
      </div>

      {/* Sorting */}
      <div className="p-2">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="cursor-pointer bg-gray-800  text-gray-300 focus:outline-none"
            // onClick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default ViewSelection