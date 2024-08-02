import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };
    const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Must be 50 characters or less')
      .required('This field is mandatory'),
      number: Yup.string()
      .matches(phoneRegExp, 'Phone number must be in the format: 000-00-00')
      .required('This field is mandatory'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      > {({ errors }) => (
         <Form className={css.form}>
        <label className={css.label} htmlFor="name">Name</label>
        <Field className={css.field} id="name" name="name" />
        <ErrorMessage className={css.errorText} name="name" component="div" />
        <label className={css.label} htmlFor="number">Number</label>
        <Field className={css.field} id="number" name="number" />
        <ErrorMessage className={css.errorText} name="number" component="div" />
        <button disabled={Object.keys(errors).length > 0} className={css.submitBtn} type="submit">Add Contact</button>
      </Form> 
      )} 
      
    </Formik>
  );
};

export default ContactForm;
