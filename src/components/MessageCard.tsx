import Image from 'next/image'
import React from 'react'

export default function MessageCard({ message, me, other }: any) {
  const isMyMessage = message.senderId === me.id
  const userData = isMyMessage ? me : other
  return (
    <div className={`mb-5 flex ${isMyMessage ? "justify-start" : "justify-end"} items-center gap-2`}>
      {isMyMessage && (
        <Image src={userData.avatarUrl} width={35} height={35} alt='avatar' />
      )}
      <div className={`${isMyMessage ? "bg-blue-900" : "bg-gray-800"} max-w-56 xl:max-w-96 px-5 py-2 rounded-3xl`}>
        <p>{message.content}</p>
        <p className='text-xs font-thin text-gray-400 mt-1'>{message.time ? new Date(message.time.seconds * 1000).toLocaleString() : "No timestamp"}</p>
      </div>
      {!isMyMessage && (
        <Image src={userData.avatarUrl} width={35} height={35} alt='avatar' />
      )}
    </div>
  )
}
