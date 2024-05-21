import React, { ReactNode } from 'react'

function Scroller({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="rounded-md bg-zinc-900 p-6 border border-zinc-700">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex gap-1 overflow-x-auto scrollbar-none">
        {children}
      </div>
    </div>
  )
}

export default Scroller