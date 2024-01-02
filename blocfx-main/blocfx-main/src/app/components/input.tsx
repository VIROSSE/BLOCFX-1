

import * as React from "react"
import { cn } from "../../../lib/utils"


export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string | number
    onClear?: () => void
    icon?: React.ReactNode
    title: string,
    inputClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputClassName, value, onClear, icon, type, title, ...props }, ref) => {

        const RequireBadge = () => {
            return (
                <div className='flex items-center gap-2  text-xs min-w-max'>
                    <p>{title}</p>
                    <p className='text-red-400 '>*</p>
                </div>

            )
        }

        return (
            <div className={cn("flex border  rounded-full pl-4 gap-2 bg-gray-200/50 border-gray-100/50", className)} >
                <RequireBadge />
                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-full rounded-tl-none rounded-bl-none bg-transparent px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        inputClassName,
                    )}
                    ref={ref}
                    value={value}
                    {...props}
                />
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
