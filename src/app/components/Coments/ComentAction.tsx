import { ReactNode } from "react";

interface ComentProps {
  children: ReactNode;
}

export const ComentAction = ({ children }: ComentProps) => {
  return <div className="flex gap-2">{children}</div>;
};
