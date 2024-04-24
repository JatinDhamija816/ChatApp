import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    const [inputs, setInputs] = useState({ email: '', password: '' })

    const HandleChange = (e) => {
        setInputs(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    const HandleLogin = (e) => {
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <div className='w-1/3 bg-slate-300 min-h-60 mt-10 drop-shadow-xl rounded-2xl mx-auto' >
            <div className='pt-5'>
                <h1 className='text-center text-2xl font-bold'>Login</h1>
            </div>
            <div>
                <form action="">
                    <div className='w-2/3 mx-auto'>
                        <div className='m-5'>
                            <div className='my-2'>
                                <label className='ml-1 font-semibold '>Email</label>
                            </div>
                            <div>
                                <input type="text" required className='w-full border-none outline-none rounded-lg px-2 p-1' placeholder='Enter Your Email' name='email' value={inputs.email} onChange={HandleChange} />
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className='my-2'>
                                <label className='ml-1 font-semibold '>Password</label>
                            </div>
                            <div>
                                <input type="password" required className='w-full border-none outline-none rounded-lg px-2 p-1' placeholder='Enter Password' name='password' value={inputs.password} onChange={HandleChange} />
                            </div>
                        </div>
                        <div className='m-5 justify-center flex'>
                            <button className='bg-black text-white w-2/3 mb-3 mt-5 rounded-lg text-xl' onClick={HandleLogin}>Login</button>
                        </div>
                        <div className='m-5 justify-center flex'>
                            <button className='mb-10'><Link to='/register'>Don't have an account? Sign up</Link></button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Login
