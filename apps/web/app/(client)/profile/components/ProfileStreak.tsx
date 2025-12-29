import React from 'react'
import { Card, CardHeader, CardContent } from '@workspace/ui/components/card'
import { Zap } from 'lucide-react'

interface ProfileStreakProps {
    value: number
}

const ProfileStreak = ({ value }: ProfileStreakProps) => {
    return (
        <div className="mt-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <h1 className="text-primary-500 mr-2 font-bold">
                            Streak
                        </h1>
                        <div className="text-primary-500 mr-2">
                            <Zap />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">{value} days</h1>
                        <p className="text-sm text-gray-500">Current streak</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileStreak
