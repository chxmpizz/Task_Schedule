import React from 'react'
import ProfileHeader from './components/ProfileHeader'
import ProfileTotalTask from './components/ProfileTotalTask'
import ProfileCompleted from './components/ProfileCompleted'
import ProfileStreak from './components/ProfileStreak'
import ProfileAchievements from './components/ProfileAchievements'
import ProfileInfo from './components/ProfileInfo'
import Preference from './components/Preference'

const page = () => {
    return (
        <div className="px-15">
            <div className="h-[10vh]"></div>
            <ProfileHeader />
            <div className="grid grid-cols-2 gap-4">
                <ProfileTotalTask value={142} />
                <ProfileCompleted value={98} />
                <ProfileStreak value={7} />
                <ProfileAchievements value={5} />
            </div>
            <div className="my-4">
                <ProfileInfo />
            </div>
            <div>
                <Preference />
            </div>
        </div>
    )
}

export default page
