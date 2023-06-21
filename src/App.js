
import { useState } from 'react';
import './App.css';
import studentdata from './Student';
import {Routes,Route} from 'react-router-dom';
import Maincomp from './Maincomp';
import Base from './Base';
import Addstud from './Addstud';


function App() {
  const [student,setstudent]=useState(studentdata)
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Base/>}/>
        <Route path='/Maincomp' element={<Maincomp
          student={student}
          setstudent={setstudent} />}/>
        <Route path='/Addstud' element={<Addstud/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
