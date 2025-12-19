import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@workspace/ui/components/card'
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from '@workspace/ui/components/avatar'

const ProfileHeader = () => {
    return (
        <Card>
            <CardHeader className="flex items-center">
                <Avatar className="mr-4 h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <CardTitle>
                    <div>
                        <h1 className="text-xl">John Doe</h1>
                        <p className="text-sm font-light">
                            john.doe@example.com
                        </p>
                    </div>
                    <div className="mt-1">
                        <p className="text-sm font-medium">
                            Member since January 2024
                        </p>
                    </div>
                </CardTitle>
            </CardHeader>
        </Card>
    )
}

export default ProfileHeader
