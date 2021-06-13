
import React, { useEffect, useState } from 'react';
import '../layout/SignUp.css';
import validation from './Validation';

const SignUp = ({ submitForm }) =>{
     const[values,setValues]=useState({
          fullname:'',
          email:'',
          password:'',
     });
     const handleChange=(e)=>{
          setValues({
               ...values,
               [e.target.name]:e.target.value,
          })
     }
     const[errors,setErrors]=useState({});
     const[dataIsCorrect,setDataIsCorrect]=useState(false);

     const handleFormSubmit=(e)=>{
          e.preventDefault();

          //validate values//
          setErrors(validation(values));
          setDataIsCorrect(true);
     };
          useEffect(()=>{
               if(Object.keys(errors).length ===0 && dataIsCorrect){
                    submitForm(true);
               }
           },[errors]);
     return(
          <div className='container1'>
               <div className='app-wrapper'>
               <div>
                    <h2 className='title'>Create Account</h2>
               </div>
               <form className="form-wrapper">
                    <div className="name">
                         <label className="label">FullName</label>
                         <input 
                              className="input" 
                              type="text" 
                              name="fullname" 
                              value={values.fullname}
                              onChange={handleChange}
                         />
                         {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                         <label className="label">Email</label>
                         <input 
                              className="input"
                              type="email" 
                              name="email" 
                              value={values.email}
                              onChange={handleChange}
                          />
                           {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                         <label className="label">Password</label>
                         <input
                              className="input" 
                              type="password" 
                              name="password" 
                              value={values.password}
                              onChange={handleChange}
                         />
                          {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
               </form>
               </div>
          </div>
     
          
     )
}

export default SignUp;