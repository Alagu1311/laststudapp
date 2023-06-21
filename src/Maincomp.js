import React from 'react'
import Base from './Base';


function Maincomp({student,setstudent}) {
  return (
   <Base
   title={"Rank Holders Info"}
   description={"Over All Ranks Holders in All Our the Department In our Colloge"}>
   
      {student.map((arr,indx)=>(
            <div key={indx}>
                <h3>Name:{arr.Name}</h3>
                <h3>Department:{arr.Dep}</h3>
                <h3>Semester:{arr.Sem}</h3>
                <h3>CGPA:{arr.Cgpa}</h3>
                </div>
        ))}
 
 </Base>
  
  )
}

export default Maincomp;