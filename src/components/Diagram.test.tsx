import React from 'react';
import { render } from '@testing-library/react';
import Diagram from './Diagram';

describe('Diagram', () => {
  it('should render without crashing', () => {
    const { baseElement } = render(<Diagram/>);
    expect(baseElement).toBeDefined();
  });
});
