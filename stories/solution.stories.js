import React from 'react';

import {
  Step1SelectAll,
  Step1ActionsAndSelectInverted,
  Step1NoToolbar
} from '../src/steps_compound/step1/story';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Solution', module)
  .add('Step 1 select all', () => (
    <div>
      <Step1SelectAll />
    </div>
  ))
  .add('Step 1 select all and actions inverted', () => (
    <div>
      <Step1ActionsAndSelectInverted />
    </div>
  ))
  .add('Step 1 no toolbar', () => (
    <div>
      <Step1NoToolbar />
    </div>
  ));
