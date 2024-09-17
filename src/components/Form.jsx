import { useState } from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import *as Yup from 'yup'

const validationScheme = Yup.object().shape({
    name: Yup.string()
        .required('Імя є обовязкове')
        .min(2, 'Мінімум 2 символи'),
    email: Yup.string()
        .email('Має бути пошта')
        .required('Пошта обовязкова'),
    phone: Yup.string()
        .required('Телефон обовязковий')
        .matches(/^[0-9]{10}$/, 'Номер повинен містити 10 цифр')
})

export const FormComponent = () => {
    const [data, setData] = useState(null)
    
    return(
        <div>
            <h1>Форма з форміком</h1>
            <Formik
                initialValues={{name: '', email: '', phone: ''}}
                validationSchema={validationScheme}
                onSubmit={values => {
                    setData(values)
                    console.log(values)
                }}
            >

                <Form>
                    <div>
                        <label htmlFor="name">Ім'я:</label>
                        <Field type="text" id="name" name="name"/>
                        <ErrorMessage name="name" component="div" className="error"></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="name">Пошта:</label>
                        <Field type="email" id="email" name="email"/>
                        <ErrorMessage name="email" component="div" className="error"></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="name">Телефон:</label>
                        <Field type="text" id="phone" name="phone"/>
                        <ErrorMessage name="phone" component="div" className="error"></ErrorMessage>
                        <button type="submit">Відправити</button>
                    </div>
                </Form>

            </Formik>

            {data && (
                <div>
                    <h2>Дані з форми:</h2>
                    <p>Ім'я: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                </div>
            )}
        </div>
    )
}