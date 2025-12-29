import React from 'react'
import { Card, CardHeader, CardContent } from '@workspace/ui/components/card'
import { Trophy } from 'lucide-react'

interface ProfileAchievementsProps {
    value: number
}

const ProfileAchievements = ({ value }: ProfileAchievementsProps) => {
    return (
        <div className="mt-4">
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <h1 className="text-primary-500 mr-2 font-bold">
                            Achievements
                        </h1>
                        <div className="text-primary-500 mr-2">
                            <Trophy />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-start">
                        <h1 className="text-2xl font-semibold">{value}</h1>
                        <p className="text-sm text-gray-500">Badges Earn</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfileAchievements
