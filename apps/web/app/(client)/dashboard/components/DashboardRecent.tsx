import React from 'react'
import { TasksTest } from '@/utils/data'

const DashboardRecent = () => {
    return (
        <div className="bg-background text-foreground ring-ring mt-5 flex flex-col rounded-md pb-4 shadow-md ring-2">
            <div className="flex items-center justify-between px-10 py-4">
                <h2 className="text-lg font-bold">Recent Tasks</h2>
            </div>
            <div>
                {TasksTest.map((task, index) => (
                    <div key={index} className="w-100 px-10 py-2">
                        <h3 className="font-medium">{task.TaskName}</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <p
                                className={` ${task.priority === 'High' ? 'bg-red-700 text-white' : task.priority === 'Medium' ? 'bg-gray-300 text-black' : 'bg-background text-foreground'} w-fit rounded-md px-3 py-1 text-center text-xs`}
                            >
                                {task.priority}
                            </p>
                            <p className="text-muted-foreground text-xs">
                                {task.time} -{' '}
                                {task.done ? 'Completed' : 'Pending'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardRecent
