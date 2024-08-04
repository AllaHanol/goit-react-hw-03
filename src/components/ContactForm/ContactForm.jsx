import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

import css from './ContactForm.module.css';


const ContactForm = ({ addContact }) => {
  const initialValues = {name: '', number: ''};
  const nameId = useId();
  const numberId = useId();
  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const validationSchema = Yup.object().shape ({
    name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Must be 50 characters or less')
    .required('This field is mandatory'),
    number: Yup.string()
    .matches(phoneRegExp, 'Phone number must be in the format: 000-00-00')
    .required('This field is mandatory'),
  });
  
  const handleFormSubmit = (values, actions) => {
    
    addContact(values.name, values.number);
    actions.resetForm();
   
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    > 
         <Form className={css.form}>
          <label className={css.label} htmlFor={nameId}>Name</label>
        <Field className={css.field} id={nameId} name="name" />
        <ErrorMessage className={css.errorText} name="name" component="div" />
        <label className={css.label} htmlFor={numberId}>Number</label>
        <Field className={css.field} id={numberId} name="number" />
        <ErrorMessage className={css.errorText} name="number" component="div" />
        <button className={css.submitBtn} type="submit">Add Contact</button>
      </Form> 
      
      
    </Formik>
  );
};

export default ContactForm;
