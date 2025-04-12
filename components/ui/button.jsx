import React from 'react';

export const Button = ({ 
  children, 
  className, 
  variant = 'default', 
  size = 'default',
  ...props 
}) => {
  const variantClasses = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-primary text-primary bg-background hover:bg-accent/30 hover:text-accent-foreground',
    ghost: 'hover:bg-accent/20 hover:text-accent-foreground'
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10 p-2'
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors 
      ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}; 