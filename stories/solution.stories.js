import React from 'react';

import {
  Step1SelectAll,
  Step1ActionsAndSelectInverted,
  Step1NoToolbar
} from '../src/steps_compound/step1/story';

import { Step2ActionsAndSelect } from '../src/steps_compound/step2/story';

import {
  Step3UncontrolledDisplayMode,
  Step3UncontrolledDisplayModeWithInitialState
} from '../src/steps_compound/step3/story';

import { storiesOf } from '@storybook/react';

storiesOf('Solution step 1', module)
  .add('Step 1 no toolbar', () => <Step1NoToolbar />)
  .add('Step 1 select all', () => <Step1SelectAll />)
  .add('Step 1 select all and actions inverted', () => (
    <Step1ActionsAndSelectInverted />
  ));

storiesOf('Solution step 2', module).add('with select all and actions', () => (
  <Step2ActionsAndSelect />
));

storiesOf('Solution step 3', module)
  .add('with uncontrolled display mode', () => <Step3UncontrolledDisplayMode />)
  .add('with uncontrolled display mode and initial state', () => (
    <Step3UncontrolledDisplayModeWithInitialState />
  ));
