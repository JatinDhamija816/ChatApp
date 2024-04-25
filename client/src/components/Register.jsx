import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')

    const HandleRegister = async (e) => {
        e.preventDefault()
        try {
            if (!name || !email || !password) {
                setError('Please fill all details')
                return
            }
            if (password.length < 6) {
                setError('Password Length must be greater than 6')
                return
            }
            const { data } = await axios.post('http://localhost:8000/api/user/register', { name, email, password, image })
            navigate('/')
            setName('')
            setEmail('')
            setPassword('')
            setImage('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-1/3 bg-slate-400 min-h-60 drop-shadow-xl rounded-2xl mx-auto' >
            <div className='pt-5'>
                <h1 className='text-center text-2xl font-bold'>Register</h1>
                {
                    error && <p className='text-red-700 text-center mt-2 '>{error}</p>
                }
            </div>
            <div>
                <form action="">
                    <div className='w-2/3 mx-auto'>
                        <div className='m-5'>
                            <div className='my-2'>
                                <label className='ml-1 font-semibold '>Name</label>
                            </div>
                            <div>
                                <input type="text" required className='w-full border-none outline-none rounded-lg px-2 p-1' placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className='my-2'>
                                <label className='ml-1 font-semibold '>Email</label>
                            </div>
                            <div>
                                <input type="text" required className='w-full border-none outline-none rounded-lg px-2 p-1' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className='my-2'>
                                <label className='ml-1 font-semibold '>Password</label>
                            </div>
                            <div>
                                <input type="password" required className='w-full border-none outline-none rounded-lg px-2 p-1' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                            </div>
                        </div>
                        <div className='m-5'>
                            <div className='my-2'>
                                <label className='ml-1 font-semibold '>Image</label>
                            </div>
                            <div>
                                <input type="file" required className='w-full border-none outline-none rounded-lg p-1' name='image' onChange={(e) => setImage(e.target.value)} value={image} />
                            </div>
                        </div>
                        <div className='m-5 justify-center flex'>
                            <button className='bg-black text-white w-2/3 mb-3 mt-5 rounded-lg text-xl' onClick={HandleRegister}>Register</button>
                        </div>
                        <div className='m-5 justify-center flex'>
                            <button className='mb-10'><Link to='/'>Already Have an Account? Sign in</Link></button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Register
