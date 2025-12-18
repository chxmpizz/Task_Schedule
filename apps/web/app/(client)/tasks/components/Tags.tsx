import React from 'react'
import { Button } from '@workspace/ui/components/button'

const TagsArr = [
    'All',
    'Active',
    'Completed',
    'High Priority',
    'Medium Priority',
    'Low Priority',
]

const Tags = () => {
    return (
        <div className="flex">
            {TagsArr.map((tag, index) => (
                <div key={index}>
                    <Button className="bg-background border-foreground text-foreground hover:bg-accent mr-2 mb-2 rounded-md border px-4 py-1 text-sm">
                        {tag}
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default Tags
