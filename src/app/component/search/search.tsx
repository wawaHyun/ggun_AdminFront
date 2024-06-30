"use client"

import { QuestionIcon } from "@/app/common/icons/icons";
import { usePathname, useSearchParams} from "next/navigation";

export function Search({ text, click, color }: IButton) {

  const searchParmas = useSearchParams();

  function handleSearch (term:string){
    console.log("handleSearch input: ",term)
    const params = new URLSearchParams(searchParmas);
    const pathname = usePathname();
    // const {replace} = useRouter();
    // const router = useRouter();

    if(term){
      params.set('query', term);
    }else{
      params.delete('query');
    }
    // router.replace(`${pathname}?${params.toString()}`)
    window.location.replace(`${pathname}?${params.toString()}`)
}

  return (
    <div className={`${color}`}>
      <label className="relative block w-full h-[10%]">
        <span className="sr-only">search</span>
        <span className="absolute top-2 left-0 flex items-center pl-2"><QuestionIcon color="rgb(148 163 184)" /></span>
        <input
          onClick={()=>click}
          onChange={(e)=>{
            handleSearch(e.target.value)
          }}
          // defaultValue={searchParmas.get('query')?.toString()}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={text} type="text" name="search" />
      </label>
    </div>
  )
}