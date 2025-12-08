'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@workspace/ui/components/button'
import { useRouter } from 'next/navigation'
import { ModeToggle } from './Theme'

const StartNav = () => {
    const router = useRouter()
    const SignInLink = () => {
        router.push('/signin')
    }
    return (
        <div className="flex max-w-full items-center justify-between px-40 py-3">
            <Link
                href={'/'}
                className="flex cursor-pointer items-center justify-center pl-10"
            >
                <div className="bg-foreground text-background w-8 rounded-lg p-1">
                    <h1 className="text-center font-bold">TS</h1>
                </div>
                <div className="ml-2 text-lg">
                    <h1 className="font-semibold">Task Schedule</h1>
                </div>
            </Link>
            <div className="flex">
                <div className="flex gap-5 px-1">
                    <Button
                        onClick={SignInLink}
                        className="bg-background text-foreground hover:bg-secondary cursor-pointer rounded-lg py-1 duration-200"
                    >
                        Sign In
                    </Button>
                    <Button className="cursor-pointer rounded-lg bg-[#3F72AF] py-1 text-white duration-200 hover:bg-[#4b6583]">
                        Get Started
                    </Button>
                </div>
                <div className="px-5">
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default StartNav
