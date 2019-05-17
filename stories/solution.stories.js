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

storiesOf('Solution step 1', module)
  .add('with only select all', () => (
    <div>
      <Step1SelectAll />
    </div>
  ))
  .add('with select all and actions inverted', () => (
    <div>
      <Step1ActionsAndSelectInverted />
    </div>
  ))
  .add('with no toolbar', () => (
    <div>
      <Step1NoToolbar />
    </div>
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
