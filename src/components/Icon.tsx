import React from "react";

interface NameProps {
  name: string;

}
export const Icon: React.FC<NameProps> = ({name}) => {
  const icon = `/images/${name}.svg`;
  return <img src={icon} className="w-12 h-auto" alt={name} /> ;

}
