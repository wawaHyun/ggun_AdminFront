"use client"

import { QuestionIcon } from "@/app/common/icons/icons"

export function Search({ click, style }: IButton) {
  return (
    <div className={`${style}`}>
      <label className="relative block w-full h-[10%]">
        <span className="sr-only">search</span>
        <span className="absolute top-1.5 left-0 flex items-center pl-2"><QuestionIcon color="rgb(148 163 184)" /></span>
        <input
          onClick={click}
          className="placeholder:italic block min-w-[45px] min-h-[40px] pl-9 pr-3 shadow-sm sm:text-sm" placeholder="Search" type="text" name="search" />
      </label>
    </div>
  )
}