import React from 'react'
import { CheckCircle } from 'lucide-react'

interface InProgressProps {
    totalInProgress: number
    hightPriority: number
}

const InProgress = ({ totalInProgress, hightPriority }: InProgressProps) => {
    return (
        <div className="bg-background text-foreground ring-ring mt-5 flex flex-col rounded-md shadow-md ring-2">
            <div className="flex items-center justify-between px-10 py-4">
                <h2 className="text-lg">In Progress</h2>
                <CheckCircle />
            </div>

            <div className="my-5 px-10">
                <h2 className="text-3xl font-extrabold">{totalInProgress}</h2>
                <p className="my-1 font-light">
                    {hightPriority} hight priority
                </p>
            </div>
        </div>
    )
}

export default InProgress
