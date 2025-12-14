'use client'
import React from 'react'
import { Button } from '@workspace/ui/components/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@workspace/ui/components/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { LayoutDashboard, ListTodo, Calendar } from 'lucide-react'
import { ModeToggle } from '../../../components/Theme'
import LogoTag from './LogoTag'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
    const pathName = usePathname()
    const router = useRouter()

    return (
        <div className="bg-background/70 fixed top-0 z-50 w-full backdrop-blur-lg">
            <div className="flex max-w-full items-center justify-between p-3">
                <LogoTag />
                <div className="flex pr-5">
                    <div className="flex gap-4 px-1">
                        <Button
                            className={` ${pathName == '/dashboard' ? 'bg-secondary' : 'bg-background'} text-foreground hover:bg-secondary flex gap-2 rounded-lg py-1 duration-200`}
                            disabled={pathName === '/dashboard'}
                            onClick={() => router.push('/dashboard')}
                        >
                            <LayoutDashboard />
                            Dashboard
                        </Button>
                        <Button
                            className={` ${pathName == '/tasks' ? 'bg-secondary' : 'bg-background'} text-foreground hover:bg-secondary flex gap-2 rounded-lg py-1 duration-200`}
                            disabled={pathName === '/tasks'}
                            onClick={() => router.push('/tasks')}
                        >
                            <ListTodo />
                            Tasks
                        </Button>
                        <Button
                            className={` ${pathName == '/calendar' ? 'bg-secondary' : 'bg-background'} text-foreground hover:bg-secondary flex gap-2 rounded-lg py-1 duration-200`}
                            disabled={pathName === '/calendar'}
                            onClick={() => router.push('/calendar')}
                        >
                            <Calendar />
                            Calendar
                        </Button>
                    </div>
                    <div className="flex gap-1 px-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="start">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        Profile
                                        <DropdownMenuShortcut>
                                            ⇧⌘P
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Billing
                                        <DropdownMenuShortcut>
                                            ⌘B
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                        <DropdownMenuShortcut>
                                            ⌘S
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Keyboard shortcuts
                                        <DropdownMenuShortcut>
                                            ⌘K
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            Invite users
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>
                                                    Email
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    Message
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>
                                                    More...
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                    <DropdownMenuItem>
                                        New Team
                                        <DropdownMenuShortcut>
                                            ⌘+T
                                        </DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuItem disabled>
                                    API
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Log out
                                    <DropdownMenuShortcut>
                                        ⇧⌘Q
                                    </DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="px-4">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
