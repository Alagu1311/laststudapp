import React from 'react'
import { useNavigate } from 'react-router-dom';

function Base({title,description}) {
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/Maincomp")}>Students</button>
        <button onClick={()=>navigate("/Addstud")}>Add students</button>
        <button>Edit students</button>
        <h3>{title="Ranks Holders students Info"}</h3>
        <p>
            {description="Over All Rank Holders From All The Department"}
        </p>

    </div>
  )
}

export default Base;