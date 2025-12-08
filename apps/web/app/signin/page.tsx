'use client'
import { FormEvent, useState } from 'react'
import { Form } from '@workspace/ui/components/form'
import {Input} from '@workspace/ui/components/input'
import { Button } from '@workspace/ui/components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const LoginPage = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

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
                    <Button className="flex rounded-md border-2 border-gray-200 px-10 py-1">
                        <FontAwesomeIcon icon={faGoogle} />
                        <p>Continue with Google</p>
                    </Button>
                    <Button className="flex w-full rounded-md border-2 border-gray-200 px-10 py-1">
                        <FontAwesomeIcon icon={faFacebook} />
                        <p>Continue with Facebook</p>
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">
                            Or continue with email
                        </span>
                    </div>
                </div>
                <div>
                    <Form >
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          
                            autoComplete="email"
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                           
                            minLength={8}
                        />
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
