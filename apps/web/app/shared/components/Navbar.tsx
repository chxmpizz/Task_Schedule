'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@heroui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faGridHorizontal } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className="flex max-w-full items-center justify-between p-3">
            <Link
                href={'/'}
                className="flex cursor-pointer items-center justify-center pl-10"
            >
                <div className="w-8 rounded-lg bg-black p-1 text-white">
                    <h1 className="text-center font-bold">TS</h1>
                </div>
                <div className="ml-2 text-lg">
                    <h1 className="font-semibold">Task Schedule</h1>
                </div>
            </Link>
            <div className="flex">
                <div className="flex px-1">
                    <Button className="flex gap-2 rounded-lg py-1 duration-200 hover:bg-gray-200">
                        <FontAwesomeIcon icon={faGridHorizontal} />
                        Dashboard
                    </Button>
                    <Button className="flex gap-2 rounded-lg py-1 duration-200 hover:bg-gray-200">
                        <FontAwesomeIcon icon={faTasks} />
                        Tasks
                    </Button>
                    <Button className="flex gap-2 rounded-lg py-1 duration-200 hover:bg-gray-200">
                        <FontAwesomeIcon icon={faCalendar} /> Calendar
                    </Button>
                </div>
                <div className="flex gap-1 border-l-2 border-gray-400 px-1">
                    <Button className="rounded-lg py-1 duration-200 hover:bg-gray-200">
                        Sign In
                    </Button>
                    <Button className="rounded-lg bg-[#3F72AF] py-1 text-white duration-200 hover:bg-[#4b6583]">
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
