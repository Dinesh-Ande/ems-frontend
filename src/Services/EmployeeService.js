import axios from "axios";

const REST_API_BASE_URL = `http://localhost:8080/apis/employees`;

export const listEmployees = () => axios.get(REST_API_BASE_URL+"/getAll");

export const addEmployee = (employee) => axios.post(REST_API_BASE_URL+"/addEmployee", employee);

export const geteEmployee = (employeeId) => axios.get(REST_API_BASE_URL+"/getEmployee/"+employeeId);

export const updateEmployee = (employeeId,employee) => axios.put(REST_API_BASE_URL+"/updateEmployee/"+employeeId, employee);

export const deleteEmploye = (employeeId) => axios.delete(REST_API_BASE_URL+"/deleteEmployee/"+employeeId);