import React from 'react'
import { TrendingUp } from 'lucide-react'

interface ProductivityProps {
    doneTasks: number
    incrementProd: number
}

const Productivity = ({ doneTasks, incrementProd }: ProductivityProps) => {
    return (
        <div className="bg-secondary text-foreground ring-ring mt-5 flex flex-col rounded-md shadow-md ring-2">
            <div className="flex items-center justify-between px-10 py-4">
                <h2 className="text-lg">Productivity</h2>
                <TrendingUp />
            </div>

            <div className="my-5 px-10">
                <h2 className="text-3xl font-extrabold">{doneTasks}%</h2>
                <p className="my-1 font-light">
                    +{incrementProd}% tasks due today
                </p>
            </div>
        </div>
    )
}

export default Productivity
