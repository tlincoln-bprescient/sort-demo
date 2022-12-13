import React from 'react';
import Label from './label';

import { render } from '@testing-library/react';

describe('when the label component is rendered', () => {
  it('renders the label text', () => {
    const component = render(<Label value={'Hello dashboard!'}/>).baseElement;

    expect(component).toBeDefined();
    expect(component.textContent).toEqual('Hello dashboard!');
  });
});
