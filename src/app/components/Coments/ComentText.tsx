interface ComentProps {
  text: string;
}

export const ComentText = ({ text }: ComentProps) => {
  return(
    <div>
    <h3 className="text-[11px]">
     {text}
    </h3>
  </div>
  )
};
