import React from 'react'
import { Card, CardHeader, CardContent } from '@workspace/ui/components/card'
import { ListTodo } from 'lucide-react'

interface ProfileTotalTaskProps {
    value: number
}

const ProfileTotalTask = ({ value }: ProfileTotalTaskProps) => {
    return (
        <div className="mt-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <h1 className="text-primary-500 mr-2 font-bold">
                            Total Tasks
                        </h1>
                        <div className="text-primary-500 mr-2">
                            <ListTodo />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">{value}</h1>
                        <p className="text-sm text-gray-500">All time</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileTotalTask
