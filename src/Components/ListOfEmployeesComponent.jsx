import React, { useEffect, useState } from 'react'
import { listEmployees , deleteEmploye} from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListOfEmployeesComponent = () => {
   
    const [employees,setEmployees] = useState([]);
    
    useEffect(()=>{
       getAllEmployees()
    },[])
    
    function getAllEmployees(){
      listEmployees().then( (response) => {
        setEmployees(response.data)
    }).catch( (error) => {
        console.error(error);
    })
    }
    
    const navigate = useNavigate();

    const addEmployee = ()=>{
        navigate("/addEmployee");
    }

    function updateEmployee(id){
      navigate(`/updateEmployee/${id}`)
    }

    function deleteEmployee(employeId){
      deleteEmploye(employeId).then(()=>{
        listEmployees().then( (response) => {
          setEmployees(response.data)
      }).catch( (error) => {
          console.error(error);
      })
      }).catch((error)=>{
        console.error(error)
      })
    }
  return (<div className='container-fluid'>
     <h2 className='text-center'>LIST OF EMPLOYEES</h2>
     <button className='btn btn-primary mb-2 btn-lg' onClick={addEmployee} style={{float:"right"}}>Add Employee</button>
     <table className='table table-striped table-bordered'> 
      <thead>
        <tr>
          <th>Employee_Id</th>
          <th>First_Name</th>
          <th>Last_Name</th>
          <th>Email_Id</th>
          <th>Mobile_No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map((employee)=>{
            return(
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.mobileNumber}</td>
                <td>
                  <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}>Update</button>
                  <button className='btn btn-danger' onClick={()=> deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
     </table>
     </div>
  )
}

export default ListOfEmployeesComponent