import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { addEmployee } from '../Services/EmployeeService'

const EmployeeComponent = () => {
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[mobileNumber, setMobileNumber] = useState('')

    const [errors, setErrors] = useState({
        firstName :'',
        lastName : '',
        email : '',
        mobileNumber:'',
    })

    const navigator = useNavigate();
    const saveEmployee = (e)=>{
        e.preventDefault();

        if(validationForm()){

            const employe = {firstName,lastName,email,mobileNumber}

            addEmployee(employe).then((response)=>{
            console.log(response.data);
            })

            navigator("/employees");
        }
    }

    function validationForm(){
        let valid = true;

        const errorCopy = {... errors};

        if(firstName.trim()){
            errorCopy.firstName = '';
        }else{
            errorCopy.firstName = 'First Name is Required';
            valid = false;
        }
        if(lastName.trim()){
            errorCopy.lastName = '';
        }else{
            errorCopy.lastName = 'Last Name is Required';
            valid = false;
        }
        if(email.trim()){
            errorCopy.email = '';
        }else{
            errorCopy.email = 'Email is Required';
            valid = false;
        }
        if(mobileNumber.trim()){
            errorCopy.mobileNumber = '';
        }else{
            errorCopy.mobileNumber = 'Mobile Number is Required';
            valid = false;
        }
        setErrors(errorCopy);
        return valid;
    }

    function cancelEmployee(){
        navigator('/employees')
    }
  
  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input
                            type='text'
                            placeholder='Enter First Name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                            onChange={(e)=> setFirstName(e.target.value)}
                            ></input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                            type='text'
                            placeholder='Enter Last Name'
                            name='lastName'
                            value={lastName}
                            className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                            onChange={(e)=> setLastName(e.target.value)}
                            ></input>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email Id:</label>
                            <input
                            type='text'
                            placeholder='Enter Email'
                            name='email'
                            value={email}
                            className={`form-control ${errors.email ? 'is-invalid':''}`}
                            onChange={(e)=> setEmail(e.target.value)}
                            ></input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Mobile Number:</label>
                            <input
                            type='text'
                            placeholder='Enter mobile number'
                            name='mobileNumber'
                            value={mobileNumber}
                            className={`form-control ${errors.mobileNumber ? 'is-invalid':''}`}
                            onChange={(e)=> setMobileNumber(e.target.value)}
                            ></input>
                            {errors.mobileNumber && <div className='invalid-feedback'>{errors.mobileNumber}</div>}
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                        <button className='btn btn-danger' onClick={cancelEmployee} style={{marginLeft:"10px"}}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent