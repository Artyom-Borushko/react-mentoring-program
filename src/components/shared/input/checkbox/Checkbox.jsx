import React from 'react';
import { useField } from 'formik';
import '../input.css';

export default function Checkbox({ ...props }) {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <div className="input-wrapper">
      <label className="checkbox-input" htmlFor={field.id}>
        <input type="checkbox" {...field} {...props} />
        {props.label}
      </label>
      {/* Handle validation outside of this component
      to not display an error message next to each checkbox option */}
    </div>
  );
}
