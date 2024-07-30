// components/Button.js
import React from 'react';

const Button = ({ buttonText, onClick }) => {
  return (
    <button
      onClick={onClick} // Llama a la función onClick pasada como prop
      className="text-white text-sm border border-purple-500 bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded"
    >
      {buttonText}
    </button>
  );
};

export default Button;