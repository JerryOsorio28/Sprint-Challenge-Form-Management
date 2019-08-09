import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Field, withFormik, resetForm } from 'formik';
import VeggyList from './VeggyList';

const RegistrationForm = ( { errors, touched, values, status } ) => {

    const [veggyList, setVeggyList] = useState([]);

    // console.log(veggyList)

    useEffect(() => {
        if (status) {
            setVeggyList(...veggyList, status)
        }
    }, [status]);

    return(
        <div className='RegistrationForm'>
            <h1>Registration Form</h1>
            <Form>
                <h3>Username</h3>
                <Field 
                    type='text' 
                    name='username' 
                    placeholder='Username'
                />
                {touched.username && errors.username && <p className="error">{errors.username}</p>}
                <h3>Password</h3>
                <Field 
                    type='password' 
                    name='password' 
                    placeholder='Password'
                />
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <button type='submit'>Submit</button>
            </Form>
            <h3>List of Vegetables..?</h3>
            <VeggyList veggyList={veggyList}/>
        </div>
    );
};

const FormikRegistrationForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            name: username || '',
            password: password || '',
        }; 
    },
//<-------------------------------------------YUP FORM VALIDATION 
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    }),

    handleSubmit(values, { setStatus,  resetForm } ) {
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                // console.log(res)
                // setStatus(res);
                resetForm();
            })
            // .catch(err => console.log(err.response))

        axios
            .get('http://localhost:5000/api/restricted/data')
            .then(data => {
                console.log(data)
                setStatus(data.data)
            })
            .catch(err => console.log(err.response))
    }

})(RegistrationForm);



export default FormikRegistrationForm;
    