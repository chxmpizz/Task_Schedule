'use client'
import React from 'react'
import { Button } from '@workspace/ui/components/button'

const CTA_Section = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-7">
            <h1 className="text-center text-4xl font-bold">
                Ready to Get Your Organized?
            </h1>
            <p className="text-center text-xl font-light text-gray-400">
                Join thousands of users who are already managing their tasks
                efficiently.
            </p>
            <div className="flex items-center justify-center">
                <Button className="cursor-pointer rounded-lg bg-[#3F72AF] px-4 py-6 text-xl font-semibold text-white duration-200 ease-in hover:bg-[#4b6583]">
                    Create Your Account
                </Button>
            </div>
        </div>
    )
}

export default CTA_Section
