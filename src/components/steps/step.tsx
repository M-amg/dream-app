import React from "react";

interface StepProps {
  description: string;
  icon: string;
}

const StepSection: React.FC<StepProps> = ({ description, icon }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mr-5">{icon}</div>
      <div className="text-gray-800">{description}</div>
    </div>
  );
};

export default StepSection;
