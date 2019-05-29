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
  .add('Step 1 no toolbar', () => <Step1NoToolbar />)
  .add('Step 1 select all', () => <Step1SelectAll />)
  .add('Step 1 select all and actions inverted', () => (
    <Step1ActionsAndSelectInverted />
  ));

storiesOf('Solution step 2', module)
  .add('with only select all', () => (
    <div>
      <Step2SelectAll />
    </div>
  ))
  .add('with select all and actions inverted', () => (
    <div>
      <Step2ActionsAndSelectInverted />
    </div>
  ))
  .add('with no toolbar', () => (
    <div>
      <Step2NoToolbar />
    </div>
  ));
