import axios from "axios";
import { useState } from "react"
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";


const Login = () => {
    const [formData, setFormData] = useState({username:"",password:""});
    const {username, password} = formData;
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const changeHandler = (e) => {
        e.preventDefault();
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value
            }
        ))
    }

    const onsubmit = (e) => {
        e.preventDefault();
        const data = {...formData,expiresInMins:2*24*60};
        console.log(data)
        axios.post('https://dummyjson.com/auth/login',data).then((res)=>{
            localStorage.setItem('token',res.data.token);
            navigate('/products');
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className='flex justify-center items-center min-h-screen font-ubuntu'>
        <div className='flex flex-col max-w-[480px] min-w-[280px] p-4 gap-3 bg-slate-900 rounded-md'>
            <h2 className="text-center text-gray-50 text-4xl pb-8">Login</h2>
            <form className=" flex flex-col gap-4" onSubmit={onsubmit}>
                {/* Email input */}
                <label className='w-full flex flex-col gap-0'>
                    <p className='text-sm text-gray-500'>Username <sup className='text-pink-500'>*</sup></p>
                    <Input 
                        required={true}
                        type="text" 
                        value={username}
                        changeHandler={changeHandler}
                        placeholder="Enter username"
                        name='username'
                    />
                </label>

                {/* password input */}
                <label className='w-full flex flex-col gap-0 relative'>
                    <p className='text-sm text-gray-500'>Password <sup className='text-pink-500'>*</sup></p>
                    <Input 
                        required = {true}
                        type={showPassword?("text"):("password")}
                        value={password}
                        changeHandler={changeHandler}
                        placeholder="Enter Password"
                        name='password'
                    />
                    <span className='absolute right-3 top-1/2 z-10 cursor-pointer text-gray-500' onClick={()=>setShowPassword((prev) => !prev)}>
                        {showPassword?(<AiOutlineEyeInvisible fontSize={20} />):(<AiOutlineEye fontSize={20} />)}
                    </span>
                </label>

                <button type="submit" className="flex justify-center rounded-none px-3 py-2 text-sm font-semibold text-gray-100 bg-gray-950 focus:outline-none mt-5">
                    Sign In
                </button>


            </form>
        </div>

    </div>
  )
}

export default Login