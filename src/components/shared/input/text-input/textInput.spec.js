import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Formik } from 'formik';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

describe('Text input component tests', () => {
  it('renders text input with Formik', () => {
    const { container } = render(
      <Formik
        initialValues={{ movieTitle: '' }}
        onSubmit={() => {}}
      >
        <TextInput
          label="Title"
          name="movieTitle"
          type="text"
          id="movieTitle"
          placeholder="Title"
        />
      </Formik>,
    );

    expect(container).toMatchSnapshot();
  });

  it('can type in text input with Formik', async () => {
    render(
      <Formik
        initialValues={{ movieTitle: '' }}
        onSubmit={() => {}}
      >
        <TextInput
          label="Title"
          name="movieTitle"
          type="text"
          id="movieTitle"
          placeholder="Title"
        />
      </Formik>,
    );

    const titleInput = screen.getByLabelText('Title');
    await userEvent.click(titleInput);
    await userEvent.keyboard('test title 123');

    expect(titleInput.value).toBe('test title 123');
  });
});
