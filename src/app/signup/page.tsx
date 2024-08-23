'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AvatarGenerator } from "random-avatar-generator"
import Image from "next/image"
import Link from "next/link"
import { auth, firebase } from '@/config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"



interface ErrorType {
    name?: string;
    email?: string;
    password?: string;
    cpassword?: string;
}

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [error, setError] = useState<ErrorType>({})
    const [loading, setLoading] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState('')
    const router = useRouter()

    const generatorRandomAvatar = () => {
        const generator = new AvatarGenerator();
        return generator.generateRandomAvatar();
    }

    useEffect(() => {
        setAvatarUrl(generatorRandomAvatar())
    }, [])

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const newError: ErrorType = {};
        if (!name.trim()) {
            newError.name = 'Name is Required'
        }
        if (!email.trim()) {
            newError.email = 'Email is Required'
        }
        if (password.length < 6) {
            newError.password = 'Password must be at lest 6 characters'
        }
        if (cpassword !== password) {
            newError.cpassword = 'Config Password does not match'
        }
        setError(newError)
        return Object.keys(newError).length === 0
    }

    const handelRefreshAvatar = () => {
        setAvatarUrl(generatorRandomAvatar())
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (!validateForm()) {
                setLoading(false)
                return
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            const docRef = doc(firebase, 'users', user.uid)
            await setDoc(docRef, {
                name,
                email,
                avatarUrl
            })
            router.push('/')
            setError({})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl rounded-md shadow-lg p-10 bg-section">
                <h1 className="text-xl text-center font-semibold text-[#0b3a65ff] ">
                    Chat
                    <span className="font-bold text-[#eeab63ff] ">2</span>
                    Chat
                </h1>
                <div className="flex justify-between items-center gap-5 space-y-2 p-2">
                    <Image objectFit='contain' src={avatarUrl} width={20} height={20} alt="avatar" className="rounded-full w-20 h-20" />
                    <button type="button" className="btn btn-primary" onClick={() => { handelRefreshAvatar() }}>Refresh</button>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <label className="label">
                            <span className="text-base label">Name </span>
                        </label>
                        <input type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className="input input-bordered w-full" />
                        {error.name && <span className="text-sm text-red-500">{error.name}</span>}
                    </div>
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
                </div>
                <div className="flex flex-row justify-between items-center">
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
                        <label className="label">
                            <span className="text-base label">Confirm Password </span>
                        </label>
                        <input type="password"
                            placeholder="Enter  Confirm Password"
                            value={cpassword}
                            onChange={(e) => { setCPassword(e.target.value) }}
                            className="input input-bordered w-full" />
                        {error.cpassword && <span className="text-sm text-red-500">{error.cpassword}</span>}
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary text-center">
                        {
                            loading ? <span className="loading loading-spinner loading-md"></span> : 'Singup'
                        }
                    </button>
                </div>
                <span>Alreade Have An Account? </span>
                <Link href={'/login'} className="text-blue-600 hover:text-blue-800 hover:underline" >Login</Link>
            </form>
        </div>
    )
}
