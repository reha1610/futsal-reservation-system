import React, { useState } from 'react';
import SignUp from './SignUp';
import SignUpSuccess from './SignUpSucess';

const Form = () =>{
     //form submitted correctly or not//
     const[formIsSubmitted,setFormIsSubmitted]=useState(false);
     const submitForm =()=>{
          setFormIsSubmitted(true);
     };
     return(
          <div>
               {!formIsSubmitted ? (
                    <SignUp submitForm={submitForm}/>
                ) :(
                    <SignUpSuccess/>
                )}
          </div>
     );
};

export default Form;