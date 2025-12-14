import React from 'react'
import Link from 'next/link'

const LogoTag = () => {
    return (
        <div>
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
        </div>
    )
}

export default LogoTag
