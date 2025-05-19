import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Formik } from 'formik';
import userEvent from '@testing-library/user-event';
import TextArea from './TextArea';

describe('Text area input component tests', () => {
  it('renders text area input with Formik', () => {
    const { container } = render(
      <Formik
        initialValues={{ movieOverview: '' }}
        onSubmit={() => {}}
      >
        <TextArea
          label="Overview"
          name="movieOverview"
          id="movieOverview"
          placeholder="Movie description"
        />
      </Formik>,
    );

    expect(container).toMatchSnapshot();
  });

  it('can type in text area input with Formik', async () => {
    render(
      <Formik
        initialValues={{ movieOverview: '' }}
        onSubmit={() => {}}
      >
        <TextArea
          label="Overview"
          name="movieOverview"
          id="movieOverview"
          placeholder="Movie description"
        />
      </Formik>,
    );

    const descriptionInput = screen.getByLabelText('Overview');
    await userEvent.click(descriptionInput);
    await userEvent.keyboard('test movie description 123');

    expect(descriptionInput.value).toBe('test movie description 123');
  });
});
