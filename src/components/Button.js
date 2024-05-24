import React from 'react';

const Button = ({ value, onClick, className, isActive, setActive }) => {
  const handleClick = () => {
    onClick(value);
    setActive(value);
  };

  return (
    <button className={`${className} ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;