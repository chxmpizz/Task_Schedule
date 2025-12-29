import React from 'react'
import { Card, CardHeader, CardContent } from '@workspace/ui/components/card'
import { CircleCheck } from 'lucide-react'

interface ProfileCompletedProps {
    value: number
}

const ProfileCompleted = ({ value }: ProfileCompletedProps) => {
    return (
        <div className="mt-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <h1 className="text-primary-500 mr-2 font-bold">
                            Completed
                        </h1>
                        <div className="text-primary-500 mr-2">
                            <CircleCheck />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">{value}</h1>
                        <p className="text-sm text-gray-500">
                            69%{/*get from (completed / total task * )100 */}{' '}
                            Completion rate
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileCompleted
