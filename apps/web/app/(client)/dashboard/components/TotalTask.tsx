import React from 'react'
import { ListTodo } from 'lucide-react'

interface TotalTaskProps {
    total: number
    totalDue: number
}

const TotalTask = ({ total, totalDue }: TotalTaskProps) => {
    return (
        <div className="bg-background text-foreground ring-ring mt-5 flex flex-col rounded-md shadow-md ring-2">
            <div className="flex items-center justify-between px-10 py-4">
                <h2 className="text-lg">Total Tasks</h2>
                <ListTodo />
            </div>

            <div className="my-5 px-10">
                <h2 className="text-3xl font-extrabold">{total}</h2>
                <p className="my-1 font-light">{totalDue} tasks due today</p>
            </div>
        </div>
    )
}

export default TotalTask
