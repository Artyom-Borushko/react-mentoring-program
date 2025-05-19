import React from 'react';
import { useField } from 'formik';
import '../input.css';

export default function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="input-wrapper textarea">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="form-field-validation-error">{meta.error}</div>
      ) : null}
    </div>
  );
}
