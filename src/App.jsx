import './App.css'
import AddEmployeeComponent from './Components/AddEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import { HeaderComponent } from './Components/HeaderComponent'
import ListOfEmployeesComponent from './Components/ListOfEmployeesComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {


  return ( 
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/employees' element={<ListOfEmployeesComponent/>}></Route>
        <Route path='/addEmployee' element={<AddEmployeeComponent/>}></Route>
        <Route path='/updateEmployee/:id' element={<UpdateEmployeeComponent/>}></Route>
      </Routes>
      {/* <FooterComponent/> */}
      </BrowserRouter>
    </div>
  )
}

export default App
