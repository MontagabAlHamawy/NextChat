import Image from 'next/image'
import React from 'react'

export default function UserCard({ name, avatarUrl, lastMessageText, time, type }: any) {
  return (
    <div className='flex w-full items-center p-4 gap-4 bg-body rounded-md relative cursor-pointer'>
      <div>
        <Image src={avatarUrl} width={50} alt={'avatar'} height={50} />
      </div>
      {type === 'chat' && (
        <div className='flex justify-start items-start flex-col gap-1'>
            <h1 className='text-sm font-bold'>{name}</h1>
          <p className='text-xs font-thin text-gray-500'>{lastMessageText}</p>
          <p className='text-xs text-gray-400'>{time}</p>
        </div>
      )}
      {type === 'user' && (
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-sm font-bold'>{name}</h1>
          <p className='text-xs text-gray-400'>{time}</p>
        </div>
      )}
    </div>
  )
}
