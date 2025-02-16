import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        BACKLOG:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/50",
        TODO: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/40",
        IN_PROGRESS:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        IN_REVIEW:
          "border-transparent bg-line-5000 text-primary-foreground shadow hover:bg-primary/70",
        DONE: "border-transparent bg-sky-700 text-primary-foreground shadow hover:bg-primary/80",
        LOW: "bg-green-100 text-green-700 border border-green-500",
        MEDIUM: "bg-yellow-100 text-yellow-700 border border-yellow-500",
        HIGH: "bg-red-100 text-red-700 border border-red-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
