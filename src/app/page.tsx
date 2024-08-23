'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { app, firebase } from '@/config/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Users from "@/components/Users";
import ChatRoom from "@/components/ChatRoom";

export default function Home() {
  const auth = getAuth(app)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const [selectChatroom, setSelectChatroom] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(firebase, 'users', user.uid)
        const userSnap = await getDoc(userRef)
        const userData = ({ id: userSnap.id, ...userSnap.data() })
        setUser(userData)
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [auth, router])


  return (
    <div className="flex h-screen">
      <div className=" w-3/12 hidden xl:block flex-shrink-0">
        <Users userData={user} setSelectChatroom={setSelectChatroom} />
      </div>
      <div className="flex-grow w-3/12">
        <ChatRoom user={user} selectChatroom={selectChatroom} />
      </div>
    </div>
  );
}
