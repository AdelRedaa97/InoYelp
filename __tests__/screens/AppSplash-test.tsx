/**
 * @format
 */

import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';

import AppSplash from '../../src/screens/introAndAuth/appSplash/AppSplash';

describe('AppSplach', () => {
  it('renders appSplash using Snapshots', () => {
    const appSplash = render(<AppSplash />);

    expect(appSplash.toJSON()).toMatchSnapshot();
  });
});
