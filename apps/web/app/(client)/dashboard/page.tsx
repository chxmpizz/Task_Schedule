import React from 'react'
import Navbar from '../../shared/components/Navbar'

import Completed from './components/Completed'
import InProgress from './components/InProgress'
import Productivity from './components/Productivity'
import TotalTask from './components/TotalTask'
import DashboardTopic from './components/DashboardTopic'
import DashboardRecent from './components/DashboardRecent'
import Upcoming from './components/Upcoming'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="h-[8vh]"></div>
            <div className="px-15 py-5">
                <DashboardTopic />
                <div className="grid grid-cols-2 gap-5">
                    <TotalTask total={24} totalDue={8} />
                    <InProgress totalInProgress={12} hightPriority={3} />
                    <Completed totalCompleted={18} percentCompleted={12} />
                    <Productivity doneTasks={92} incrementProd={5} />
                </div>
                <div>
                    <DashboardRecent />
                    <Upcoming />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
