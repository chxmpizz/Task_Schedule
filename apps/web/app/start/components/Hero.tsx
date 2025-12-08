'use client'
import { Button } from '@workspace/ui/components/button'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="flex w-3xl flex-col items-center justify-center gap-6">
                <h1 className="text-center text-6xl font-bold">
                    Organize Your Life, One Task at a Time
                </h1>
                <p className="text-center text-xl font-light text-gray-400">
                    A minimal, clean task scheduling app, Organize your
                    tasks,manage your schedule, and boost your productivity.
                </p>
            </div>
            <div className="my-5 flex items-center justify-center">
                <Button className="cursor-pointer rounded-lg bg-[#3F72AF] px-4 py-6 text-xl font-semibold text-white duration-200 ease-in hover:bg-[#4b6583]">
                    Start Free Today!
                </Button>
            </div>
        </div>
    )
}

export default Hero
