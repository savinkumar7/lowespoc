import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from './Button';
import ReduxThunk from 'redux-thunk';

import {action} from '@storybook/addon-actions';


export const actions = {
    changeButtonContext: action('changeButtonContext'),
  };

storiesOf('Button', module)
.addDecorator(story => <div className="main-container">{story()}</div>)
.add( 'button', () => <Button  /> );