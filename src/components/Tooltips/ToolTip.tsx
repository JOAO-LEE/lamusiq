import { ReactNode } from "react";



interface Tooltip {
  children: ReactNode
  information: string
}

export function ToolTip({children, information}: Tooltip) {
  return (
    <div className="group relative inline-block">
      {children}
      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transtition rounded-md absolute top-full whitespace-nowrap border border-zinc-600 p-2 bg-zinc-800 mt-2">{information}</span>
    </div>
    
  )
}

