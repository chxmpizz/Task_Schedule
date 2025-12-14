import React from 'react'

const TasksTest = [
    {
        id: 1,
        TaskName: 'Review project proposal',
        priority: 'High',
        time: '10:00',
        done: false,
    },
    {
        id: 2,
        TaskName: 'Team stand up meeting',
        priority: 'Medium',
        time: '11:00',
        done: true,
    },
    {
        id: 3,
        TaskName: 'Update design mockups',
        priority: 'High',
        time: '13:00',
        done: false,
    },
    {
        id: 4,
        TaskName: 'Client presentation',
        priority: 'High',
        time: '16:00',
        done: false,
    },
    {
        id: 5,
        TaskName: 'Code review',
        priority: 'Low',
        time: '17:30',
        done: true,
    },
]

const DashboardRecent = () => {
    return (
        <div className="bg-secondary text-foreground ring-ring mt-5 flex flex-col rounded-md pb-4 shadow-md ring-2">
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
