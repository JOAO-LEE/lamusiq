import { ReactNode, useRef } from "react";

interface Tooltip {
  children: ReactNode
  information: string
}

export function ToolTip({children, information}: Tooltip) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const containerDivRef = useRef<HTMLDivElement>(null);

  const getMouseXPosition = (mouseX: number) => {
    const hasNoReference = !tooltipRef.current || !containerDivRef.current 
    if (hasNoReference) return;
    const { left } = containerDivRef.current.getBoundingClientRect();
    tooltipRef.current.style.left = `${mouseX - left}px`;
  };

  return (
    <div
    ref={containerDivRef}
    onMouseEnter={({clientX}) => getMouseXPosition(clientX)} 
    className="group relative inline-block">
      {children}
      <span
      ref={tooltipRef} 
      className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transtition duration-200 rounded-md absolute top-full whitespace-nowrap border border-zinc-600 p-2 bg-zinc-800 mt-2">{information}</span>
    </div>
    
  )
}