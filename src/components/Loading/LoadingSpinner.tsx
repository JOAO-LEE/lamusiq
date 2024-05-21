import { LoaderCircle } from "lucide-react";

export function LoadingSpinner() {
  return (
    <section className="h-screen flex flex-col gap-2 justify-center items-center">
      <LoaderCircle size={60} className="text-green-400 animate-spin"/>
    </section>
  )
}
