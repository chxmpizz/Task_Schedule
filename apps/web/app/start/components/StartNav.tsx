'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@workspace/ui/components/button'
import { useRouter } from 'next/navigation'
import { ModeToggle } from '../../../components/Theme'
import LogoTag from '@/app/shared/components/LogoTag'

const StartNav = () => {
    const router = useRouter()
    const SignInLink = () => {
        router.push('/signin')
    }
    const SignUpLink = () => {
        router.push('/signup')
    }
    return (
        <div className="bg-background/70 fixed top-0 z-50 w-full backdrop-blur-lg">
            <div className="flex max-w-full items-center justify-between px-40 py-3">
                <LogoTag />
                <div className="flex">
                    <div className="flex gap-5 px-1">
                        <Button
                            onClick={SignInLink}
                            className="bg-background text-foreground hover:bg-secondary cursor-pointer rounded-lg py-1 duration-200"
                        >
                            Sign In
                        </Button>
                        <Button
                            onClick={SignUpLink}
                            className="cursor-pointer rounded-lg bg-[#3F72AF] py-1 text-white duration-200 hover:bg-[#4b6583]"
                        >
                            Get Started
                        </Button>
                    </div>
                    <div className="px-5">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartNav
