import React from 'react'

const UpcomingSchedule = [
    {
        id: 1,
        ScheduleName: 'Project Planning',
        starttime: '9.00',
        time: '9.00 - 10:30',
        attendees: 4,
    },
    {
        id: 2,
        ScheduleName: 'Design Review',
        starttime: '11.00',
        time: '11:00 - 12:00',
        attendees: 3,
    },
    {
        id: 3,
        ScheduleName: 'Lunch Break',
        starttime: '12.30',
        time: '12:30 - 13:30',
        attendees: 0,
    },
    {
        id: 4,
        ScheduleName: 'Development Sprint',
        starttime: '14.00',
        time: '14:00 - 17:00',
        attendees: 6,
    },
    {
        id: 5,
        ScheduleName: 'Weekly Wrap-up',
        starttime: '17.30',
        time: '17:30 - 18:00',
        attendees: 8,
    },
]

const Upcoming = () => {
    return (
        <div className="bg-background text-foreground ring-ring mt-5 flex flex-col rounded-md pb-4 shadow-md ring-2">
            <div className="flex items-center justify-between px-10 py-4">
                <h2 className="text-lg font-bold">Upcoming Schedule</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 px-10">
                {UpcomingSchedule.map((task, index) => (
                    <div
                        key={index}
                        className="flex w-full items-center justify-between gap-5 rounded-lg p-5 ring"
                    >
                        <div className="flex gap-4">
                            <div className="bg-secondary h-fit w-14 rounded-sm p-2 text-center">
                                <h3 className="text-medium font-semibold">
                                    {task.starttime}
                                </h3>
                            </div>
                            <div>
                                <h3 className="font-medium">
                                    {task.ScheduleName}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <p className="text-muted-foreground text-xs">
                                        {task.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-light">
                                {task.attendees != 0
                                    ? `${task.attendees} Attendees`
                                    : ''}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Upcoming
