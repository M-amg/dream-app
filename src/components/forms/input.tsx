import React from "react";


interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  description: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  description,
}) => {
  return (
    <div className="my-8">
      <label
        htmlFor={name}
        className="block text-lg leading-6 text-white"
      >
        {label}
      </label>
      <p className="mt-2 text-xs text-white" id={`${name}-description`}>
        {description}
      </p>
      <div className="mt-2">
        <input
          type="email"
          name={name}
          id={name}
          className="block w-full border-b-4 border-white border-0 py-1.5 focus:ring-0 text-white shadow-sm bg-transparent placeholder:text-white focus:border-gray-200 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          aria-describedby={`${name}-description`}
        />
      </div>
      
    </div>
  );
};

export default Input;
