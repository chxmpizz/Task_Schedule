import React from 'react'
import { ListTodo } from 'lucide-react'

interface CompletedProps {
    totalCompleted: number
    percentCompleted: number
}

const Completed = ({ totalCompleted, percentCompleted }: CompletedProps) => {
    return (
        <div className="bg-background text-foreground ring-ring mt-5 flex flex-col rounded-md shadow-md ring-2">
            <div className="flex items-center justify-between px-10 py-4">
                <h2 className="text-lg">Completed</h2>
                <ListTodo />
            </div>

            <div className="my-5 px-10">
                <h2 className="text-3xl font-extrabold">{totalCompleted}</h2>
                <p className="my-1 font-light">
                    +{percentCompleted}% from last week
                </p>
            </div>
        </div>
    )
}

export default Completed
