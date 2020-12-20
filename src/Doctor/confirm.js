import React, { Component } from "react";
import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow,IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";
import Sidemen from '../Patient/Sidemen'
import Axios from "axios";


class confirmapp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showMe: false,
            pid:"",
            patientdata:[],
            name:"",
            symptom:"",
            time:"",
            data:[]

        };
        this.submitbtn = this.submitbtn.bind(this);

    }

    componentDidMount()
    {
        this.setState({
            pid: this.props.match.params.pid
        })

        const url = "http://localhost:80/doctor/conapp.php";
        Axios.get(url, {
            params: {
               pid:this.props.match.params.pid,
               email: localStorage.getItem('email')
            }

        }).then(resp => {
            this.setState({ data: resp.data,
            symptom: resp.data.symptoms,
            name:resp.data.pname,
            time:resp.data.apptime
           
            
             })
             const age = resp.data.age;
            console.log(age)
            console.log(resp.data)
            

            console.log(resp.data.pname)
});
    }

    submitbtn = e => {

        e.preventDefault();
        this.setState({
            showMe: true,
            
        })
        console.log(this.state)

        let formData = new FormData();
        formData.append("pid", this.state.pid);
        formData.append("time", this.state.time);
        formData.append("status", '1');
        formData.append("email", localStorage.getItem('email'));
        const url = "http://localhost:80/doctor/updateapp.php";
        Axios.post(url, formData)
      .then((res) => {
        console.log(res)
        }).catch(res => console.log(Error))


    };

     handletime = e => {
        this.setState({ time: e.target.value });
      };

    render() {
        return (

            <IonApp>
                <IonHeader>
                    <Sidemen />
                    <IonToolbar>
                        <IonTitle>Confirm appointment</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    
                    <div class="cen">
                   
                        <IonGrid>
                            
                                    <IonItem>
                                        <IonLabel position="floating">Patient Name</IonLabel>
                                        <IonInput readonly="true" value={this.state.name} ></IonInput>
                                    </IonItem>
                               
                                    <IonItem>
                                        <IonLabel position="floating">Disease</IonLabel>
                                        <IonInput readonly="true" value={this.state.symptom} ></IonInput>
                                    </IonItem>
                              
                                    <IonItem>
                                        <IonLabel position="floating">Appointment Time</IonLabel>
                                        <IonInput value={this.state.time} onIonChange={this.handletime}></IonInput>
                                    </IonItem>
                                
                                    <IonButton color="dark" onClick={this.submitbtn}>Confirm Appointment</IonButton>
                                

                                 {
                        this.state.showMe ?
                            <div>
                                <IonItem>
                                    <IonLabel >Appointment is Confirmed with {this.state.name} at {this.state.time} </IonLabel>
                                   
                                </IonItem>
                                
                            </div>

                            : null
                    }

                            
                        </IonGrid>

                        
                        </div>
                   

                </IonContent>
            </IonApp>
        );
    }
}
export default confirmapp;