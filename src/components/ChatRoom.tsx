import React from 'react'
import MessageCard from './MessageCard'
import MessageInput from './MessageInput'

export default function ChatRoom({ usre }: any) {
    const message = [
        {
            id: 1,
            sender: 'Montagab AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hello.",
            time: '2h ago'
        },
        {
            id: 2,
            sender: 'Ali AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hi Montagab.",
            time: '1h ago'
        },
        {
            id: 1,
            sender: 'Montagab AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hello.",
            time: '2h ago'
        },
        {
            id: 2,
            sender: 'Ali AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hi Montagab.",
            time: '1h ago'
        },
        {
            id: 1,
            sender: 'Montagab AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hello.",
            time: '2h ago'
        },
        {
            id: 2,
            sender: 'Ali AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hi Montagab.",
            time: '1h ago'
        },
        {
            id: 1,
            sender: 'Montagab AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hello. /n akfsoghio dsfffffffffffff fffffffffffffff sds fgnjk jdgjn jlsdngj ",
            time: '2h ago'
        },
        {
            id: 2,
            sender: 'Ali AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hi Montagab.",
            time: '1h ago'
        },
        {
            id: 1,
            sender: 'Montagab AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hello.",
            time: '2h ago'
        },
        {
            id: 2,
            sender: 'Ali AL-Hamawy',
            avatarUrl: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=White&clotheType=ShirtVNeck&eyeType=Happy&eyebrowType=AngryNatural&facialHairColor=Brown&facialHairType=MoustacheFancy&hairColor=Auburn&hatColor=Gray01&mouthType=Grimace&skinColor=Light&topType=ShortHairShortFlat',
            MessageText: "Hi Montagab.",
            time: '1h ago'
        },
    ]
    return (
        <div className='flex flex-col h-screen '>
            <div className='flex-1 overflow-y-auto p-2 xl:p-10'>
                {
                    message.map((mass) => {
                        return (
                            <div key={mass.id}>
                                <MessageCard message={mass} user={'Montagab AL-Hamawy'} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='sticky bottom-0 left-0 w-full'>
                <MessageInput/>
            </div>
        </div>
    )
}
