'use client'

import * as React from 'react'

import { Calendar } from '@workspace/ui/components/calendar'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@workspace/ui/components/card'
import { CircleCheckBig, Circle } from 'lucide-react'
import { TasksTest } from '@/utils/data'

export function Schedule() {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(2025, 5, 12)
    )

    return (
        <div >
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-full rounded-lg [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
                buttonVariant="ghost"
            />
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Today's Schedule</CardTitle>
                        <h1>{date?.toLocaleDateString()}</h1>
                    </CardHeader>
                    <CardContent>
                        {TasksTest.map((task) => (
                            <div
                                key={task.id}
                                className="mb-4 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-4">
                                    <div>
                                        {task.done ? (
                                            <CircleCheckBig />
                                        ) : (
                                            <Circle />
                                        )}
                                    </div>
                                    <div>
                                        <h1
                                            className={`text-md font-semibold ${
                                                task.done
                                                    ? 'text-ring line-through'
                                                    : ''
                                            }`}
                                        >
                                            {task.TaskName}
                                        </h1>
                                        <p className="text-sm">
                                            {task.time} -{' '}
                                            {task.done
                                                ? 'Completed'
                                                : 'Pending'}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="bg-accent rounded-sm px-2 py-1 text-sm font-normal">
                                        {task.category}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
