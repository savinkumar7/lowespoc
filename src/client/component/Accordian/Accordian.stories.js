import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordian from './Accordian';

export const filtersList = [{
    "id": "f1",
    "name": "Category",
    "types": [
        "Vegetables",
        "Fruits",
        "Icecream",
        "Juice"
    ]
},
{
    "id": "f2",
    "name": "Price",
    "types": [
        "$1-$100",
        "$100-$200",
        "$200-$300",
        "$300-#400"
    ]
}]

storiesOf('Accordian', module)
    .addDecorator(story => <div >{story()}</div>)
    .add('Filters', () => <Accordian filtersList={filtersList} />)
    .add('without Filters', () => <Accordian filtersList={[{
        "id": "f5",
        "name": "Out of Stock"
    }]} />)
    .add('with and without Filters', () => <Accordian filtersList={[...filtersList, {

        "id": "f5",
        "name": "Out of Stock"
    }

    ]} />)
