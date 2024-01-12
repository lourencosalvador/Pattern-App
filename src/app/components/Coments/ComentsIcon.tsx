import { ButtonHTMLAttributes, ElementType } from "react"

 
interface ComentProps  {
    icon: ElementType
}

export const ComentIcon = ({icon: Icon }: ComentProps) => {
    return (
        <div  className="w-[50px] h-[50px] shadow-2xl rounded-sm overflow-hidden bg-slate-700 flex justify-center items-center">
    <Icon className="text-blue-950 text-[1.7rem]"/>        
    </div>
    )
}