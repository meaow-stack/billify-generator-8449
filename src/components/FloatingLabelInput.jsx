import React from 'react';

const FloatingLabelInput = ({ id, label, type = 'text', value, onChange, name, className = '', disabled = false }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        className={`input-modern peer placeholder-transparent ${className}`}
        placeholder=" "
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete="off"
        data-lpignore="true"
        data-form-type="other"
        spellCheck="false"
        aria-autocomplete="none"
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background dark:bg-card px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
