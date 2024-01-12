import { ButtonHTMLAttributes, ElementType } from "react"
import { IoCheckmarkSharp } from "react-icons/io5"

interface ComentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
    color: string
}

export const ComentActionCheck = ({icon: Icon, color}: ComentProps) => {
   return(
    <div className={`w-[40px] h-[40px] bg-slate-700 text-${color}-500 flex justify-center items-center`}>
    <Icon />
    </div>
   )
}