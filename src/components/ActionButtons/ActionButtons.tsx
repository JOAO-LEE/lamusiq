import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-6">
      <button className="rounded-full bg-black/40 p-1">
        <ChevronLeft />
      </button>
      <button className="rounded-full bg-black/40 p-1">
        <ChevronRight />
      </button>
    </div>
  )
}