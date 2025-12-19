import React from 'react'
import { Button } from '@workspace/ui/components/button'
import { Plus, Search } from 'lucide-react'
import Tags from './components/Tags'
import { Input } from '@workspace/ui/components/input'
import TaskCard from './components/TaskCard'

const page = () => {
    return (
        <div className="">
            <div className="h-[10vh]"></div>
            <div className="px-15">
                <div className="flex items-center justify-between gap-2">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-extrabold">Tasks</h1>
                        <p className="text-md font-light text-gray-500">
                            Here you can manage your tasks efficiently.
                        </p>
                    </div>
                    <Button className="cursor-pointer">
                        <Plus />
                        Add Task
                    </Button>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <Tags />
                    <div className="relative w-full sm:w-64">
                        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                        <Input placeholder="Search tasks..." className="pl-9" />
                    </div>
                </div>
                <div className="my-5">
                    <TaskCard />
                </div>
            </div>
        </div>
    )
}

export default page
