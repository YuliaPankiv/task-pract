import React, { Component } from 'react';
import {AddContactForm}from './ContactForm.styled'
import '../styles/styles-custom.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ number: '', name: '' });
  };
  render() {

    const { number, name } = this.state;
    return (
      <AddContactForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder='name'
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            placeholder='xxxxxxxxx'
pattern='/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/'
            onChange={this.handleChange}
            required
          />
        </label>
        <button type='submit'>Add contact</button>
      </AddContactForm>
    );
  }
}

export default ContactForm;

// import React from 'react';
// import { Formik, Form, useField } from 'formik';
// import * as Yup from 'yup';
// import '../styles/styles.css';
// import '../styles/styles-custom.css';

// const MyTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// // And now we can use these
// const phoneRegExp =
// RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/);


// export const ContactForm = ({onSubmit}) => {
  
//   return (
//     <>
//       <h1>Subscribe!</h1>
//       <Formik
//         initialValues={{
//           personName: '',
//           number: '',
//         }}
//         validationSchema={Yup.object({
//           personName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),

//           number: Yup.string()
//             .required('required')
//             .matches(phoneRegExp, 'Phone number is not valid')
            
//         })}
//         onSubmit={ (values, { setSubmitting }) => {
//           console.log(onSubmit);    
//           onSubmit(values)
//         }}
//       >
//         <Form>
//           <MyTextInput
//             label="First Name"
//             name="personName"
//             type="text"
//             placeholder="Jane"
//           />
//           <MyTextInput
//             label="Number"
//             name="number"
//             type="number"
//             placeholder="+380XXXXXXXXX" 
//           />

//           <button type="submit">Submit</button>
//         </Form>
//       </Formik>
//     </>
//   );
// };
