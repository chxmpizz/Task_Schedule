import React from 'react'
import { Schedule } from './components/Schedule'

const page = () => {
    return (
        <div className="px-15 py-5" suppressHydrationWarning>
            <div className="h-[6vh]"></div>
            <div className="space-y-2">
                <h1 className="text-3xl font-extrabold">Schedule</h1>
                <p className="text-md font-light text-gray-500">
                    View and manage your calendar.
                </p>
            </div>
            <Schedule />
        </div>
    )
}

export default page
