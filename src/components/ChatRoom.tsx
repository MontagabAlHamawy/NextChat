
import React, { useEffect, useRef, useState } from 'react'
import MessageCard from './MessageCard'
import MessageInput from './MessageInput'
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { firebase } from '@/config/firebase'

export default function ChatRoom({ usre, selectChatroom }: any) {
    const me = selectChatroom?.myData
    const other = selectChatroom?.otherData
    const chatRoomId = selectChatroom?.id

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<any>([])
    const messagesContinerRef = useRef(null)

    useEffect(() => {
        if (!chatRoomId) {
            return
        }
        const unsubscribe = onSnapshot(query(collection(firebase, 'messages'), where('chatRoomId', '==', chatRoomId), orderBy('time', 'asc')), snapshot => {
            const messageData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setMessages(messageData)
        })
        return unsubscribe
    }, [chatRoomId])
    console.log("messages: ", messages);


    const sendMessage = async (e: any) => {
        const messageCollection = collection(firebase, 'messages')
        if (message.trim() === '') {
            return
        }
        try {
            const messageData = {
                chatRoomId,
                senderId: me.id,
                content: message,
                image: '',
                messageType: 'text',
                time: serverTimestamp()
            }
            await addDoc(messageCollection, messageData),
                setMessage('')
            const chatroomRef = doc(firebase, 'chatroom', chatRoomId)
            await updateDoc(chatroomRef, {
                lastMessage: messageData,
            })
        } catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <div className='flex flex-col h-screen '>
            <div className='flex-1 overflow-y-auto p-2 xl:p-10'>
                {
                    messages.map((mass: any) => {
                        return (
                            <div key={mass.id}>
                                <MessageCard message={mass} me={me} other={other} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='sticky bottom-0 left-0 w-full'>
                <MessageInput sendMessage={sendMessage} message={message} steMessage={setMessage} />
            </div>
        </div>
    )
}
