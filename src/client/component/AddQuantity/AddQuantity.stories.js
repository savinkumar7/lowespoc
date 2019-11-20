import React from 'react';
import {storiesOf} from '@storybook/react';

import AddQuantity from './AddQuantity';

export const totalQuantity = 10;

storiesOf('AddQuantity', module)
.addDecorator(story => <div>{story()}</div>)
.add('Add quantity check', () => <AddQuantity totalQuantity = {totalQuantity} />)