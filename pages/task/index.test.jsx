import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskDetails from '.';

describe('TaskDetails', () => {
  it('renders the form elements correctly', () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(<TaskDetails />);
    // Assert that form elements are rendered
    expect(getByPlaceholderText('Enter task name')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter task description')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('Priority')).toBeInTheDocument();
    expect(getByText('Save')).toBeInTheDocument();
  });

  it('validates the form and shows error messages', () => {
    const { getByText, getByTestId } = render(<TaskDetails />);
    const saveButton = getByText('Save');

    // Click the save button without filling out the form
    fireEvent.click(saveButton);

    // Assert that error messages are displayed
    expect(getByText('Name is required.')).toBeInTheDocument();
    expect(getByText('Priority is required.')).toBeInTheDocument();
    expect(getByText('Status is required.')).toBeInTheDocument();

    // Fill out the form with invalid data
    fireEvent.change(getByPlaceholderText('Enter task name'), { target: { value: 'A' } });
    fireEvent.click(saveButton);

    // Assert that the specific error message is displayed
    expect(getByText('Name should be longer than 2 chars.')).toBeInTheDocument();

    // Fill out the form with valid data
    fireEvent.change(getByPlaceholderText('Enter task name'), { target: { value: 'Valid Name' } });
    fireEvent.change(getByLabelText('Status'), { target: { value: 'in_progress' } });
    fireEvent.change(getByLabelText('Priority'), { target: { value: 'high' } });

    // Submit the form
    fireEvent.click(saveButton);

    // Assert that no error messages are displayed
    expect(getByTestId('error-message')).not.toBeInTheDocument();
  });
});