import React from 'react';

import {
  Step1SelectAll,
  Step1ActionsAndSelectInverted,
  Step1NoToolbar
} from '../src/steps_compound/step1/story';

import {
  Step2SelectAll,
  Step2ActionsAndSelectInverted,
  Step2NoToolbar
} from '../src/steps_compound/step2/story';

import { storiesOf } from '@storybook/react';

storiesOf('Solution', module)
  .add('Step 1 select all', () => (
    <div>
      <Step1SelectAll />
    </div>
  ))
  .add('Step 1 select all and actions inverted', () => (
    <div>
      <Step2ActionsAndSelectInverted />
    </div>
  ))
  .add('Step 1 no toolbar', () => (
    <div>
      <Step2NoToolbar />
    </div>
  ))
  .add('Step 2 select all', () => (
    <div>
      <Step2SelectAll />
    </div>
  ))
  .add('Step 2 select all and actions inverted', () => (
    <div>
      <Step2ActionsAndSelectInverted />
    </div>
  ))
  .add('Step 2 no toolbar', () => (
    <div>
      <Step2NoToolbar />
    </div>
  ));
