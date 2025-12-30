'use client'
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { userTest } from '@/utils/data'
import {
    Form,
    FormItem,
    FormField,
    FormLabel,
    FormControl,
    FormMessage,
} from '@workspace/ui/components/form'
import { Input } from '@workspace/ui/components/input'
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from '@workspace/ui/components/card'
import { Textarea } from '@workspace/ui/components/textarea'

const ProfileInfoForm = z.object({
    email: z.string().email('Write your new valid email.'),
    fullName: z.string().min(2, 'Write your new name minimum 2 characters.'),
    bio: z.string().max(100, 'Write your new '),
})
type ProfileInfoFormType = z.infer<typeof ProfileInfoForm>

const ProfileInfo = () => {
    const form = useForm<ProfileInfoFormType>({
        resolver: zodResolver(ProfileInfoForm),
        defaultValues: {
            email: userTest.email,
            fullName: userTest.name,
            bio: userTest.bio,
        },
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                    Update your personal details and information
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form action="">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Full Name"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-4">
                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                placeholder="Bio"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default ProfileInfo
