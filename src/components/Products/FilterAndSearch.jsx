import React, { useState } from 'react'
import Input from '../common/Input'
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";

const FilterAndSearch = ({productsList,setProductsList,clearFilters}) => {
    const [searchString, setSearchString] = useState("");
    const [priceFilter, setPriceFilter] = useState(2000);

    const searchHandler = (e) => {
        e.preventDefault();
        axios.get(`https://dummyjson.com/products/search?q=${searchString}`).then((res) => {
            setProductsList(res.data);
            console.log(`reslut for ${searchString}`,res.data);
        }).catch((error) => {
            console.log("error while searching:",error)
        });
    }

    const updateFilterValue = (e) => {
        e.preventDefault();
        setPriceFilter(e.target.value);
    }

    const filterByPrice = (e) => {
        const filteredProducts = productsList.filter((product) => product.price <= priceFilter);
        setProductsList(filteredProducts);       
    }

    const rangeInputStyles = `
        w-4/5 bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
        [&::-webkit-slider-thumb]:w-2.5
        [&::-webkit-slider-thumb]:h-2.5
        [&::-webkit-slider-thumb]:-mt-0.5
        [&::-webkit-slider-thumb]:appearance-none
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:transition-all
        [&::-webkit-slider-thumb]:duration-150
        [&::-webkit-slider-thumb]:ease-in-out
        [&::-webkit-slider-thumb]:dark:bg-slate-700

        [&::-moz-range-thumb]:w-2.5
        [&::-moz-range-thumb]:h-2.5
        [&::-moz-range-thumb]:appearance-none
        [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:border-0
        [&::-moz-range-thumb]:border-gray-600
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:transition-all
        [&::-moz-range-thumb]:duration-150
        [&::-moz-range-thumb]:ease-in-out

        [&::-webkit-slider-runnable-track]:w-full
        [&::-webkit-slider-runnable-track]:h-2
        [&::-webkit-slider-runnable-track]:bg-gray-100
        [&::-webkit-slider-runnable-track]:rounded-full
        [&::-webkit-slider-runnable-track]:dark:bg-gray-700

        [&::-moz-range-track]:w-full
        [&::-moz-range-track]:h-2
        [&::-moz-range-track]:bg-gray-100
        [&::-moz-range-track]:rounded-full
    `
  return (
    <div className='py-10 flex flex-col gap-10'>

        {/* Search by name */}
        <form className='w-full flex flex-col gap-0 relative'>
          <Input
            type="text"
            name="search"
            placeholder="Search"
            value={searchString}
            changeHandler={(e) => setSearchString(e.target.value)}
          />
          <button type='submit' className='absolute right-3 top-1/3 z-10 cursor-pointer text-gray-500' onClick={searchHandler}>
            <FaSearch />
          </button>
        </form>

        {/* Filter by price */}
        <div className="">
            <h3 className='text-xl text-gray-300 select-none'>Price : <span className='text-gray-50 text-base select-none'> $ {priceFilter}</span></h3>
            <div className='flex justify-between items-center mt-2 gap-2'>
                <input
                    type="range"
                    name="price"
                    min={0}
                    max={2000}
                    value={priceFilter}
                    onChange={updateFilterValue}
                    className={rangeInputStyles}
                />
                <button className='flex justify-center items-center px-3 py-2 text-xs font-semibold text-gray-100 bg-gray-900 focus:outline-none rounded-sm' onClick={filterByPrice}>
                    Apply
                </button>
            </div>
        </div>

        <div className='flex justify-end'>
            <button className='flex justify-center items-center px-3 py-3 text-sm font-semibold text-gray-100 bg-gray-900 focus:outline-none rounded-md' onClick={() => clearFilters(true)}>
                <p>Clear Filters</p>
                <FaFilterCircleXmark/>
            </button>
        </div>
    </div>
  )
}

export default FilterAndSearch