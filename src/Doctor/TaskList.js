import React from "react"
import {IonButton, IonInput,IonSelect,IonSelectOption} from '@ionic/react'
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
      return (
        <tr key={val.index}>
          <td>
          <input type="text"  name="projectName" data-id={idx} id={projectName} className="form-control "  placeholder="Medicine" style={{width:'100px'}} />
          
          </td>
          <td>
          <input type="text"  name="task" id={task} data-id={idx} className="form-control " placeholder="Repeat" style={{width:'140px'}}/>
            
          </td>
          <td>
           

          <select name="taskNotes" id={taskNotes} data-id={idx} className="form-control" placeholder="Time" style={{width:'140px'}}>
          <option value="" disabled selected>Timings</option>
              <option value="Morning">Morning</option>
              <option value="Noon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Noon/Mor/Eve">Noon/Mor/Eve</option>
              <option value="Mor/Eve">Mor/Eve</option>
              <option value="Mor/Noon">Mor/Noon</option>
              <option value="Eve/Noon">Eve/Noon</option>
              
            </select>
          </td>
          <td>
          


          <select name="taskStatus" id={taskStatus} data-id={idx} className="form-control" placeholder="Food" style={{width:'125px'}} >
          <option value="" disabled selected>Food Status</option>
              <option value="Before Food">Before Food</option>
              <option value="After Food">After Food</option>
              
            </select>
          </td>
          <td>
            {

                
            idx===0?<IonButton onClick={()=>props.add()}>+</IonButton>
            : <IonButton onClick={(()=>props.delete(val))}>-</IonButton>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList
