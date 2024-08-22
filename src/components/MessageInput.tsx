import React from 'react'
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa'

export default function MessageInput() {
    return (
        <div className='bg-section flex items-center xl:border-l xl:border-body rounded-t-3xl p-4 gap-2'>
            <FaPaperclip size={20} className='text-gray-500 mr-2 cursor-pointer' />
            <input type='text' placeholder='Type a Message' className='flex-1 border-none p-2 outline-none bg-body rounded-md' />
            <FaPaperPlane size={25} className='text-blue-700 mx-2 cursor-pointer' />
        </div>
    )
}
