import { useState } from "react"
import UserCard from "./UserCard"
import ChatRoom from "./ChatRoom"
export default function Users({ usre }: any) {
    const [activeTab, setActiveTab] = useState('users')

    const handleTabClick = (tab: any) => {
        setActiveTab(tab)
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
            </div>
            <div>
                {
                    activeTab === 'chatrooms' && (<>
                        <h1 className="px-4 text-base font-semibold">Chat Rooms</h1>
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            lastMessageText="Hello."
                            time="2h ago"
                            type={'chat'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            lastMessageText="Hello."
                            time="2h ago"
                            type={'chat'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            lastMessageText="Hello."
                            time="2h ago"
                            type={'chat'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            lastMessageText="Hello."
                            time="2h ago"
                            type={'chat'}
                        />
                    </>)
                }
                {
                    activeTab === 'users' && (<>
                        <h1 className="px-4 text-base font-semibold">Users</h1>
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            time="2h ago"
                            type={'user'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            time="2h ago"
                            type={'user'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            time="2h ago"
                            type={'user'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            time="2h ago"
                            type={'user'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            time="2h ago"
                            type={'user'}
                        />
                        <UserCard name="Montagab AL-Hamawy"
                            avatarUrl="https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat"
                            time="2h ago"
                            type={'user'}
                        />
                    </>)
                }
            </div>
        </div>
    )
}
