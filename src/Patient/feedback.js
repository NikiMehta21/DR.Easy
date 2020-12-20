import React,{ Component } from 'react';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonApp,IonSelectOption, IonItem,IonLabel,IonSelect } from "@ionic/react";
import Patientmenu from './Patientmenu';
import Axios from 'axios';
class feedback extends Component
{

    constructor(props)
    {
        super(props)
        this.state=
        {
            val:"0",
            exp:'',
            ratting:'',
        }
        
    }

   
    componentDidMount()
    {
        const url = "http://localhost:80/doctor/appdetails.php";
        Axios.get(url, {
            params: {
                email:localStorage.getItem('email')
            }

        }).then(resp => {

            this.setState({ val: resp.data.dr_id })
            console.log(resp.data)
            console.log(this.state)
           



            //console.log(resp.data.status)
        });
    }
     
    handleratting = e => {
        this.setState({
            ratting: e.target.value
        })
    }

    handleexp = e => {
        this.setState({
            exp: e.target.value
        })
    }

    submitbtn = e => {
        console.log(this.state)
        let formData = new FormData();
        
        
        formData.append("exp", this.state.exp);
        formData.append("id", this.state.val);
        formData.append("ratting", this.state.ratting);
        formData.append("email", localStorage.getItem('email'));
        const url = "http://localhost:80/doctor/patfeedback.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                
            }).catch(res => console.log(Error))
            window.location.reload(true);
            alert('Feedback Sent ')
    }
    render(){


        if(typeof(this.state.val) !== 'undefined' &&  this.state.val !== null)
        {
            return(
            
                <IonApp>
                <IonHeader>
                <Patientmenu/>
                    <IonToolbar>
                        <IonTitle>FeedBack</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <IonToolbar>
                        <IonTitle>Give Your FeedBack To Support Doctor </IonTitle>
                    </IonToolbar>
                
                    <IonItem>
                        <IonLabel>Q-1: How is Your Experience</IonLabel>
                        <IonSelect  id="exp"  onIonChange={this.handleexp} value={this.state.exp} >
                        <IonSelectOption value="4">Best</IonSelectOption>
                        <IonSelectOption value="3">Better</IonSelectOption>
                        <IonSelectOption value="2">Good</IonSelectOption>
                        <IonSelectOption value="1">Worst</IonSelectOption>
                      </IonSelect>
                    </IonItem>

                    

                    <IonItem>
                        <IonLabel>Q-2: Your Rattings..?</IonLabel>
                        <IonSelect   onIonChange={this.handleratting} value={this.state.ratting}>
                        <IonSelectOption value="1">1 STAR</IonSelectOption>
                        <IonSelectOption value="2">2 STAR</IonSelectOption>
                        <IonSelectOption value="3">3 STAR</IonSelectOption>
                        <IonSelectOption value="4">4 STAR</IonSelectOption>
                        <IonSelectOption value="5">5 STAR</IonSelectOption>
                      </IonSelect>
                    </IonItem>

                    <IonButton onClick={this.submitbtn}>Rate Us</IonButton>

                    <div>Thank You For Ratting Us</div>
                </IonContent>
            </IonApp>
            
            )
        }
        else{
        return(
            <IonHeader>
                <Patientmenu/>
                    <IonToolbar>
                        <IonTitle>Give Your FeedBack To Support Doctor</IonTitle>
                    </IonToolbar>

                    < p style={{margin : '20px'}}>To FeedBack Us Make Appointment or Visit Dr</p>
                </IonHeader>
                
            
        );
        }
    }
}
export default feedback;