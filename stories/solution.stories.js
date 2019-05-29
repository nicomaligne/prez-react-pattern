import React from 'react';

import {
  Step1SelectAll,
  Step1ActionsAndSelectInverted,
  Step1NoToolbar
} from '../src/steps_compound/step1/story';

import { storiesOf } from '@storybook/react';

storiesOf('Solution', module)
  .add('Step 1 no toolbar', () => <Step1NoToolbar />)
  .add('Step 1 select all', () => <Step1SelectAll />)
  .add('Step 1 select all and actions inverted', () => (
    <Step1ActionsAndSelectInverted />
  ));
