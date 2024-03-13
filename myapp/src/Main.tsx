import React from 'react'
import { useAppSelector } from './hooks'

export default function Main() {

    const profileArray = useAppSelector((state) => state.mySlice.items)

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {profileArray.map(item => (
                <div key={item.id} className="border h-32">
                    <img className="w-full h-full object-cover" src={item.picture} alt="profile-picture"/>
                    {item.name}   
                </div>
            ))}
        </div>
    )
}
