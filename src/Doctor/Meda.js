import React from "react"
import TaskList from "./TaskList"
import Axios from 'axios';
import '../components/task.css'
import { IonButton, IonContent ,IonApp,IonToolbar,IonHeader,IonTitle, IonItem, IonLabel, IonInput} from "@ionic/react";
import Sidemen from '../Patient/Sidemen';

class Form extends React.Component {
    state = {
        taskList: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        date: "",
        description: "",
        id:'',
        course:''
    }

    componentDidMount(){

        this.setState({
            id: this.props.match.params.id
        })
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }

    handlecourse = e => {

        this.setState({ course: e.target.value });
    };


    handleChange = (e) => {
        if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    handleSubmit = e => {
        console.log(this.state.taskList)
        e.preventDefault();
        let formData = new FormData();
        let data = JSON.stringify(this.state.taskList);
        console.log(data)
        formData.append("id",this.props.match.params.id);
        formData.append("email",localStorage.getItem('email'));
        formData.append("course",this.state.course);

        formData.append("data", data);
        const url = "http://localhost:80/doctor/medicine.php";
    Axios.post(url, formData)
      .then(res => console.log(res.data))

      .catch(res => console.log(Error));


      
       
       
       
        alert("Medicine Added");
         
   
        console.log(this.state);
     }

    


    render() {
        let { taskList } = this.state
       // let { notes, date, description, taskList } = this.state
        return (
<IonApp>
            <IonHeader>
                    <Sidemen />
                    <IonToolbar>
                        <IonTitle>Prescription </IonTitle>
                    </IonToolbar>
                </IonHeader>
            <IonContent>
            <div className="content">
               

                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                   
                        
                            <div className="card" style={{paddingTop:'10px'}}>

                               <IonItem >
                                   <IonLabel position="floating" >
                                    Course(In days)
                                   </IonLabel>
                                   <IonInput value={this.state.course} onIonChange={this.handlecourse} ></IonInput>
                               </IonItem>
                               
                                
                                    <table className="table" style={{marginTop:"15px"}}>
                                        
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                       
                                    </table>
                                    <button type="submit" class="button1" >Add</button>
                                   
                                </div>
                               
                           
                        </form>
                       
                    
                
            </div>
            </IonContent>
            </IonApp>
        )
    }
}
export default Form