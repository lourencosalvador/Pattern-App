import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";

interface CardProps {}

export interface CardAction {
  abrir: () => void;
}

export const Card = forwardRef<CardAction, CardProps>((props, ref) => {
  const [state, setState] = useState(true);

  const fecharCard = useCallback(() => {
    setState(false);
  }, []);

  const abrir = useCallback(() => {
    setState(true);
  }, []);


  useImperativeHandle(ref, () => ({
    abrir,
  }));

  if (!state) {
    return null;
  }

  return (
    <div>
      <h1 className="text-slate-100">Card</h1>
      <button onClick={fecharCard}>Fechar Card</button>
    </div>
  );
});
