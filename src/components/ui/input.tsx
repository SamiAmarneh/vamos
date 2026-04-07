import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-md bg-muted px-3 py-2 text-base transition-all outline-none placeholder:text-muted-foreground focus-visible:bg-card focus-visible:ring-2 focus-visible:ring-primary/20 hover:bg-muted/80 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 border border-transparent focus-visible:border-primary/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
