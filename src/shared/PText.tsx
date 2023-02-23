import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <p className="basis-3/5 font-montserrat text-xl font-bold">{children}</p>
  );
};

export default HText;
