import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';


export const RegisterFormikPage = () => {


  return (
    <div>
        <h1>Register Formik Page</h1>
        
        <Formik 
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ ( values ) => {
                console.log(values);
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                    .required('Requerido')
                    .min(2, 'Debe de tener al menos 2 caracteres')
                    .max(15, 'Debe de tener como maximo 15 caracteres'),
                    email: Yup.string()
                            .required('Requerido')
                            .email('Debe de digitar un email valido'),
                    password1: Yup.string()
                                .required('Requerido')
                                .min(6, 'Debe de tener al menos 6 caracteres'),
                    password2: Yup.string()
                                .oneOf([ Yup.ref('password1') ], 'Las contrasenias deben de coincidir')
                                .required('Requerido')
                                

                            
                })
            }
        >
            {
                ({ handleReset }) => (
                    <Form>
                        <MyTextInput 
                            label="Name" 
                            name="name"
                            placeholder="Pedro Sanchez"
                        />
                        <MyTextInput 
                            label="Email Address" 
                            name="email"
                            placeholder="pedro@google.com"
                            type="email"
                        />
                        <MyTextInput 
                            label="Password" 
                            name="password1"
                            type="password"
                        />
                        <MyTextInput 
                            label="Confirm Password" 
                            name="password2"
                            type="password"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )
            } 
        </Formik>

            
            
    </div>
  )
}
