'use client'
import { useState } from 'react'
import { TasksTest } from '@/utils/data'
import { Card, CardContent } from '@workspace/ui/components/card'
import { Badge } from '@workspace/ui/components/badge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@workspace/ui/components/dropdown-menu'
import { Button } from '@workspace/ui/components/button'
import { MoreVertical, Pencil, Trash2 } from 'lucide-react'

import { Checkbox } from '@workspace/ui/components/checkbox'
const priorityColors = {
    high: 'destructive',
    medium: 'secondary',
    low: 'outline',
} as const

const TaskCard = () => {
    const [tasks, setTasks] = useState(TasksTest)
    const toggleTask = (id: string) => {
        setTasks(
            tasks.map((task) => {
                return String(task.id) === id
                    ? { ...task, done: !task.done }
                    : task
            })
        )
    }
    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => String(task.id) !== id))
    }
    return (
        <div className="space-y-5">
            {tasks.map((task) => (
                <Card
                    key={task.id}
                    className={`${task.done ? 'opacity-60' : ''}`}
                >
                    <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                            <Checkbox
                                id={String(task.id)}
                                checked={task.done}
                                onCheckedChange={() => {
                                    toggleTask(String(task.id))
                                }}
                                className="mt-1"
                            />

                            <div className="flex-1 space-y-2">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1">
                                        <label
                                            htmlFor={String(task.id)}
                                            className={`cursor-pointer text-base leading-none font-medium ${
                                                task.done ? 'line-through' : ''
                                            }`}
                                        >
                                            {task.TaskName}
                                        </label>
                                        <p className="text-muted-foreground text-sm">
                                            {task.description}
                                        </p>
                                    </div>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8"
                                            >
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>
                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                className="text-destructive"
                                                onClick={() =>
                                                    deleteTask(String(task.id))
                                                }
                                            >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>

                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge
                                        variant={
                                            priorityColors[
                                                task.priority.toLowerCase() as keyof typeof priorityColors
                                            ]
                                        }
                                        className="text-xs"
                                    >
                                        {task.priority}
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-xs"
                                    >
                                        {task.category}
                                    </Badge>
                                    <span className="text-muted-foreground text-xs">
                                        {task.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default TaskCard
