import React from 'react';
import { render } from '@testing-library/react';
import Veggy from './VeggyList';


describe('<Veggy />', () =>{
    it('render without crashing', () =>{
        render(<Veggy />)
    })
})