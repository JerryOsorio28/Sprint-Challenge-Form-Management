import React from 'react';
import { render } from '@testing-library/react';
// import VeggyList from './VeggyList';
import FormikRegistrationForm from './RegistrationForm';



describe('<FormikRegistrationForm />', () =>{

    it('render the word Food Menu', () =>{
        const form = render(<FormikRegistrationForm />)
        form.getByText(/food menu/i);
    });
});



// describe('<VeggyList />', () =>{

//     it('renders Food List', () =>{
//         const foodList = render(<VeggyList veggylist={veggy}/>)

//         const list = foodList.getAllByTestId('veggy.name');
//         expect(list).toHaveLength(veggyList.length)
//     });

// });