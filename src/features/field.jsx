

import { forwardRef } from "react";

const Field = forwardRef(function Field(
  {
    id,
    label,
    value,
    onChange,
    onBlur,
    error,
    touched,
    type = "text",
  
    optional = false,
    select = false,
    children,
  },
  ref
) {
  const errorId = `${id}-error`;
  const showError = touched && error;

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {optional && " (optional)"}
      </label>

      {select ? (  
        <select
          ref={ref}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
         
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? errorId : undefined}

          >
           
        {children}
        </select>

    ) : (
        <input
          ref={ref}
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          
          aria-invalid={showError ? "true" : "false"}
          aria-describedby={showError ? errorId : undefined}
        />
      )}

      {showError && (
        <p id={errorId} role="alert" className="field-error">
          {error}
        </p>
      )}
    </div>
  );
});

export default Field;