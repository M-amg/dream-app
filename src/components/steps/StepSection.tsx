import React, { ReactNode } from "react";

interface StepProps {
  description: string;
  icon: ReactNode;
}

const StepSection: React.FC<StepProps> = ({ description, icon }) => {
  return (
    <div className="flex items-center">
      <div className="mr-5">{icon}</div>
      <div className="text-gray-800 text-xs">{description}</div>
    </div>
  );
};

export default StepSection;
