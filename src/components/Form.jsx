import { useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import *as Yup from 'yup'

const validationScheme = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Minimum 2 characters'),
    email: Yup.string()
        .email('It must be mail')
        .required('Mail is required'),
    phone: Yup.string()
        .required('The phone is wired')
        .matches(/^[0-9]{10}$/, 'Phone number must contain 10 digits')
})

export const FormComponent = () => {
    const [data, setData] = useState(null)
    
    return(
        <div className="osnova__osnov">
            <Formik
                initialValues={{name: '', email: '', phone: ''}}
                validationSchema={validationScheme}
                onSubmit={values => {
                    setData(values)
                    console.log(values)
                }}
            >

                <Form className="form__osnova">
                    <article className="grid_container">
                        
                        <div className="text">
                            <h1>Form to fill out</h1>
                        </div>

                        <div className="first__item">
                            <label htmlFor="name">First name :</label>
                            <br/>
                            <Field type="text" id="name" name="name" placeholder="Enter your name" className="block"/>
                            <ErrorMessage name="name" component="div" className="error"></ErrorMessage>
                        </div>
                        
                        <div className="second__item">
                            <label htmlFor="name">Emal id :</label>
                            <br/>
                            <Field type="email" id="email" name="email" placeholder="info@xyz.com" className="block"/>
                            <ErrorMessage name="email" component="div" className="error"></ErrorMessage>
                        </div>
                        
                        <div className="third__item">
                            <label htmlFor="name">Password :</label>
                            <br/>
                            <Field type="password" id="password" name="password" placeholder="xxxxxxxxxx" className="block"/>
                            <ErrorMessage name="password" component="div" className="error"></ErrorMessage>
                        </div>
                        
                        <div className="fourth__item">
                            <label htmlFor="name">Company Name :</label>
                            <br/>
                            <Field type="text" id="company" name="company" placeholder="Enter your name" className="block"/>                        
                        </div>
                        
                        <div className="thir__item">
                            <label htmlFor="name">Mobile No.  :</label>
                            <br/>
                            <Field type="text" id="phone" name="phone" placeholder="+380" className="block"/>
                            <ErrorMessage name="phone" component="div" className="error"></ErrorMessage>
                            <br/>
                        </div>
                        
                        <div className="but__item">
                            <button type="submit" className="but">Sign up </button>
                        </div>
                    
                    </article>
                </Form>

            </Formik>

            {/* {data && (
                <div>
                    <h2>Дані з форми:</h2>
                    <p>Ім'я: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                </div>
            )} */}
        </div>
    )
}