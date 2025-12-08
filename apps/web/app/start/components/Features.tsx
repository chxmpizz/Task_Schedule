import React from 'react'
import { Calendar, ChartArea, CheckCheckIcon, User } from 'lucide-react'

const Features = () => {
    return (
        <div className="px-60">
            <div className="rounded-2xl border border-gray-300"></div>
            <div className="my-10 flex flex-col items-center justify-center gap-5">
                <h1 className="text-center text-5xl font-semibold">
                    Everything You Need
                </h1>
                <p className="text-xl text-gray-400">
                    Simple, powerful features to keep you organized
                </p>
            </div>
            <div className="my-10 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-15">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <ChartArea
                            size={64}
                            className="rounded-xl bg-gray-200 px-2 py-3 text-xl text-gray-600"
                        />
                        <h1 className="text-lg font-semibold">Dashboard</h1>
                        <p className="text-center text-gray-400">
                            Get a comprehensive overview of your tasks and
                            productivity metrics at a glance.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <CheckCheckIcon
                            size={64}
                            className="rounded-xl bg-gray-200 px-2 py-3 text-xl text-gray-600"
                        />
                        <h1 className="text-lg font-semibold">
                            Task Management
                        </h1>
                        <p className="text-center text-gray-400">
                            Create, organize, and prioritize tasks with an
                            intuitive interface.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Calendar
                            size={64}
                            className="rounded-xl bg-gray-200 px-2 py-3 text-xl text-gray-600"
                        />
                        <h1 className="text-lg font-semibold">
                            Schedule Calendar
                        </h1>
                        <p className="text-center text-gray-400">
                            Plan your days with a beautiful calendar and daily
                            schedule view.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <User
                            size={64}
                            className="rounded-xl bg-gray-200 px-2 py-3 text-xl text-gray-600"
                        />
                        <h1 className="text-lg font-semibold">
                            Profile & Settings
                        </h1>
                        <p className="text-center text-gray-400">
                            Customize your experience with personalized settings
                            and preferences.
                        </p>
                    </div>
                </div>
            </div>
            <div className="rounded-2xl border border-gray-300"></div>
        </div>
    )
}

export default Features
