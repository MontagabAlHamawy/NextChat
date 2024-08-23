'use client'
import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import { firebase, app } from '@/config/firebase'
import { collection, onSnapshot, query, addDoc, serverTimestamp, where, getDocs } from "firebase/firestore"
import { getAuth, signOut } from 'firebase/auth'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { Timestamp } from "firebase/firestore";

export default function Users({ userData, setSelectChatroom }: any) {
    const [activeTab, setActiveTab] = useState('users')
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [users, setUsers] = useState<any>([])
    const [usersChat, setUsersChat] = useState<any>([])
    const auth = getAuth(app)
    const router = useRouter()

    const handleTabClick = (tab: any) => {
        setActiveTab(tab)
    }

    // جلب جميع المستخدمين
    useEffect(() => {
        setLoading(true)
        const usersQuery = query(collection(firebase, 'users'))
        const unsubscribe = onSnapshot(usersQuery, (querySnapshot) => {
            const users: any = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setUsers(users)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    // جلب جميع غرف الدردشة التي تشمل المستخدم الحالي
    useEffect(() => {
        setLoading2(true)
        if (!userData) {
            return
        }
        const chatRoomQuery = query(
            collection(firebase, 'chatrooms'),
            where('users', 'array-contains', userData.id)
        )
        const unsubscribe = onSnapshot(chatRoomQuery, (querySnapshot) => {
            const chat: any = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setUsersChat(chat)
            setLoading2(false)
        })
        return unsubscribe;
    }, [userData])

    // تسجيل الخروج
    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.success('Logout successful')
            router.push('/login')
        }).catch((err) => {
            toast.error(err.message)
        })
    }

    // إنشاء غرفة دردشة جديدة
    const createChat = async (user: any) => {
        // التحقق من وجود غرفة دردشة مسبقة بين المستخدمين
        const exsistingChatroom = query(
            collection(firebase, 'chatrooms'),
            where('users', 'array-contains', userData.id)
        );

        try {
            const exsistingChatRoomSnapshot = await getDocs(exsistingChatroom);

            const existingChat = exsistingChatRoomSnapshot.docs.find(doc => {
                const users = doc.data().users;
                return users.includes(user.id) && users.includes(userData.id);
            });

            if (existingChat) {
                toast.error('Chatroom already exists');
                return;
            }

            const usersData: any = {
                [userData.id]: userData,
                [user.id]: user,
            }
            const chatroomsData: any = {
                users: [user.id, userData.id],
                usersData,
                timestamp: serverTimestamp(),
                lastMessage: null,
            }

            const chatroomRef = await addDoc(collection(firebase, 'chatrooms'), chatroomsData);
            console.log(chatroomRef.id);
            setActiveTab('chatrooms')
        } catch (err: any) {
            console.log(err.message);
        }
    }

    const openchat = (chatroom: any) => {
        const data = {
            id: chatroom.id,
            myData: userData,
            otherData: chatroom.usersData[chatroom.users.find((id: any) => id !== userData?.id)],
        }
        setSelectChatroom(data)
    }

    return (
        <div className="shadow-lg h-screen overflow-auto bg-[#162c46]">
            <div className="flex justify-between p-4">
                <button onClick={() => handleTabClick('users')} className={`btn btn-primary ${activeTab === 'users' ? "" : "btn-outline "}`}>
                    Users
                </button>
                <button onClick={() => handleTabClick('chatrooms')} className={`btn btn-primary ${activeTab === 'chatrooms' ? "" : "btn-outline"}`}>
                    ChatRooms
                </button>
                <button onClick={() => handleLogout()} className={`btn btn-primary bg-red-500 border-red-500 hover:bg-red-300 hover:border-red-300`}>
                    LogOut
                </button>
            </div>
            <div>
                {
                    activeTab === 'chatrooms' && (<>
                        <h1 className="px-4 text-base font-semibold">Chat Rooms</h1>
                        {
                            loading2 ? <div className="w-full h-[80vh] flex justify-center items-center"><span className="loading loading-spinner loading-md"></span></div> :
                                usersChat.map((chat: any) => (
                                    <div key={chat?.id} className="mx-2 mb-2" onClick={() => { openchat(chat) }}>
                                        <UserCard name={chat.usersData[chat.users.find((id: any) => id !== userData?.id)].name}
                                            avatarUrl={chat.usersData[chat.users.find((id: any) => id !== userData?.id)].avatarUrl}
                                            time={chat.timestamp ? new Date(chat.timestamp.seconds * 1000).toLocaleString() : "No timestamp"}
                                            lastMessageText={chat.lastMessage ? chat.lastMessage : (<em>no messages</em>)}
                                            type={'chat'}
                                        />
                                    </div>
                                ))
                        }
                    </>)
                }
                {
                    activeTab === 'users' && (<>
                        <h1 className="px-4 text-base font-semibold">Users</h1>
                        {
                            loading ? <div className="w-full h-[80vh] flex justify-center items-center"><span className="loading loading-spinner loading-md"></span></div> :
                                users.map((user: any) => (
                                    user.id !== userData?.id &&
                                    (<div key={user?.id} onClick={() => { createChat(user) }} className="mx-2 mb-2">
                                        <UserCard name={user?.name}
                                            avatarUrl={user?.avatarUrl}
                                            time="2h ago"
                                            type={'user'}
                                        />
                                    </div>)
                                ))
                        }
                    </>)
                }
            </div>
        </div>
    )
}
