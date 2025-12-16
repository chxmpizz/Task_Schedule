'use client'
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from '@workspace/ui/components/form'
import { Input } from '@workspace/ui/components/input'
import { Button } from '@workspace/ui/components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Link from 'next/link'

const signInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
})

const SignInPage = () => {
    const onSubmit = (data: z.infer<typeof signInSchema>) => {
        console.log(data)
    }
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
            <div className="w-[35vw]">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-3xl font-semibold">Welcome back</h1>
                    <p className="text-lg font-light text-gray-400">
                        Sign in to your account to continue
                    </p>
                </div>
                <div className="my-5 flex w-auto flex-col gap-4">
                    <Button className="bg-background text-foreground hover:text-background flex cursor-pointer rounded-md border-2 border-gray-200 px-10 py-5">
                        <FontAwesomeIcon icon={faGoogle} />
                        <p>Continue with Google</p>
                    </Button>
                    <Button className="bg-background text-foreground hover:text-background flex cursor-pointer rounded-md border-2 border-gray-200 px-10 py-5">
                        <FontAwesomeIcon icon={faFacebook} />
                        <p>Continue with Facebook</p>
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-gray-500">
                            Or continue with email
                        </span>
                    </div>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="my-4 space-y-4"
                    >
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
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="text-white w-full cursor-pointer bg-[#3F72AF] hover:bg-[#4b6583]"
                        >
                            Sign In
                        </Button>
                    </form>
                </Form>
                <div className="flex w-full items-center justify-center">
                    <h1 className="text-gray-400">
                        Don't have an account?{' '}
                        <Link
                            href={'/signup'}
                            className="text-foreground hover:underline"
                        >
                            Create one
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
