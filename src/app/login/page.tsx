'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { auth } from '@/config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth"



interface ErrorType {
  name?: string;
  email?: string;
  password?: string;
  cpassword?: string;
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<ErrorType>({})
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const newError: ErrorType = {};
    if (!email.trim()) {
      newError.email = 'Email is Required'
    }
    if (password.length < 6) {
      newError.password = 'Password must be at lest 6 characters'
    }
    setError(newError)
    return Object.keys(newError).length === 0
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (!validateForm()) {
        setLoading(false)
        return
      }
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      if (user) {
        router.push('/')
        setError({})
      }
    } catch (error) {
      setLoading(false)
      alert('Error On Login')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen p-10 m-2 ">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl shadow-lg p-10 bg-section rounded-md">
        <h1 className="text-xl text-center font-semibold text-[#0b3a65ff] ">
          Chat
          <span className="font-bold text-[#eeab63ff] ">2</span>
          Chat
        </h1>

        <div>
          <label className="label">
            <span className="text-base label">Email </span>
          </label>
          <input type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            className="input input-bordered w-full" />
          {error.email && <span className="text-sm text-red-500">{error.email}</span>}
        </div>
        <div>
          <label className="label">
            <span className="text-base label">Password </span>
          </label>
          <input type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            className="input input-bordered w-full" />
          {error.password && <span className="text-sm text-red-500">{error.password}</span>}
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            {
              loading ? <span className="loading loading-spinner loading-md"></span> : 'Login'
            }
          </button>
        </div>
        <span>I Do not Have An Account </span>
        <Link href={'/signup'} className="text-blue-600 hover:text-blue-800 hover:underline" >SignUp</Link>
      </form>
    </div>
  )
}
