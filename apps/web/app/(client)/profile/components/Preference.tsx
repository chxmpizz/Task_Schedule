import React from 'react'
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from '@workspace/ui/components/card'
import { Switch } from '@workspace/ui/components/switch'
import { Label } from '@workspace/ui/components/label'
import { Button } from '@workspace/ui/components/button'

const notificationFeatures = [
    {
        title: 'Email Notification',
        description: 'Receive email updates about your tasks',
    },
    {
        title: 'Push Notification',
        description: 'Receive push notifications in your browser',
    },
    {
        title: 'Task Reminder',
        description: 'Get reminders for upcoming tasks',
    },
]

const Preference = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                    Customize your experience and notification settings
                </CardDescription>
            </CardHeader>
            <CardContent>
                <h1 className="text-md font-semibold">Notification</h1>
                {notificationFeatures.map((noct, index) => (
                    <div
                        key={index}
                        className="mt-2 flex w-full justify-between"
                    >
                        <div className="flex flex-col">
                            <Label
                                htmlFor={noct.title}
                                className="text-sm font-medium"
                            >
                                {noct.title}
                            </Label>
                            <p className="text-muted-foreground text-sm">
                                {noct.description}
                            </p>
                        </div>
                        <div>
                            <Switch id={noct.title} />
                        </div>
                    </div>
                ))}
                <div className="mt-6 flex justify-end">
                    <Button className="cursor-pointer">Save Preferences</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Preference
