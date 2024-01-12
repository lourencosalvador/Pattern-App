import { ReactNode } from "react";

interface ComentProps {
    children : ReactNode
}

export const ComentRoot = ({children}: ComentProps) => {
 return(
    <div className="w-[350px] h-[60px]  backdrop-blur-md mb-4  bg-white/10 rounded-sm flex justify-around items-center">
    {children}
  </div>
 )
};
