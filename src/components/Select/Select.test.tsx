import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select.component';

describe('Select', () => {
  it('should render a select with options', () => {
    const options = ['Option1', 'Option2', 'Option3'];
    render(<Select name="test-select" options={options} />);

    const select = screen.getByRole('listbox');
    expect(select.getAttribute('name')).toBe('test-select');

    options.forEach(option => {
      expect(screen.getByText(option)).toBeTruthy();
    });
  });

  it('should render multiple select by default', () => {
    const options = ['Option1', 'Option2'];
    render(<Select name="test-select" options={options} />);
    
    const select = screen.getByRole('listbox');
    console.log(select.outerHTML);
    expect(select.getAttribute('multiple')).not.toBeNull();
  });

  it('should render single select when multiple is false', () => {
    const options = ['Option1', 'Option2'];
    render(<Select name="test-select" options={options} multiple={false} />);
    
    const select = screen.getByRole('combobox');
    expect(select.getAttribute('multiple')).toBeNull();
  });

  it('should handle empty options array', () => {
    render(<Select name="test-select" options={[]} />);
    
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(0);
  });

  it('should set correct values for options', () => {
    const options = ['US', 'FR', 'EN'];
    render(<Select name="countries" options={options} />);
    
    options.forEach(option => {
      const optionElement = screen.getByText(option) as HTMLOptionElement;
      expect(optionElement.value).toBe(option);
    });
  });
});
