import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    active : boolean;
    text : string;
    num : number;
}

const Popover = ({active , text , num} : Props) => {
  return (
    <div
    className={cn(
      `bg-slate-200 rounded-xl ml-4 absolute w-96 top-7 lg:top-0 lg:left-${num} opacity-0 invisible transition   p-2 h-20`,
      active && "opacity-100 visible"
    )}
  >
    <h1 className="font-light text-sm">
      {text}
    </h1>
  </div>
  )
}

export default Popover