import React from "react";

interface TextSectionProps {
  title: string;
  description: string;
  textColor: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, description, textColor }) => {
  return (
    <>
      <h2 className={"mt-16 text-2xl font-bold tracking-tight "+textColor}>
       {title}
      </h2>
      <p className={"mt-6 "+textColor}>
       {description}
      </p>
    </>
  );
};

export default TextSection;
