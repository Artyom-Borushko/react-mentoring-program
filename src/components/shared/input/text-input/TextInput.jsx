import React from 'react';
import { useField } from 'formik';
import '../input.css';

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-wrapper">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-field-validation-error">{meta.error}</div>
      ) : null}
    </div>
  );
}
