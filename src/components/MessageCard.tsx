import Image from 'next/image'
import React from 'react'

export default function MessageCard({ message, user }: any) {
  return (
    <div className={`mb-5 flex ${user === message.sender ? "justify-start" : "justify-end"} items-center`}>
      {user === message.sender && (
        <div className=' flex justify-start items-center gap-2'>
          <Image src={message.avatarUrl} width={35} height={35} alt='avatar' />
          <div className='bg-blue-900 max-w-56 xl:max-w-96 px-5 py-2 rounded-3xl'>
            {message.MessageText}
            <p className='text-xs font-thin text-gray-400 mt-1'>{message.time}</p>
          </div>
        </div>
      )}
      {user !== message.sender && (
        <div className=' flex justify-start items-center gap-2'>
          <div className='bg-gray-800 max-w-56  xl:max-w-96 px-5 py-2 rounded-3xl'>
            {message.MessageText}
            <p className='text-xs font-thin text-gray-400 mt-1'>{message.time}</p>
          </div>
          <Image src={message.avatarUrl} width={35} height={35} alt='avatar' />
        </div>
      )}
    </div>
  )
}
