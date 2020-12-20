import React, { Component } from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonTextarea, IonText, IonToolbar, IonTitle, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import Sidemen from '../Patient/Sidemen'
import Axios from "axios";

class insertblog extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            message: '',
            title: '',
            email: '',
            currentdate: ''

        }

    }


    handlemessage = e => {
        this.setState({
            message: e.target.value
        })
    }

    handletitle = e => {
        this.setState({
            title: e.target.value
        })
    }
    componentDidMount() {
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.setState({ currentdate: date })
        console.log(date)
    }


    submitbtn = e => {
        console.log(this.state)
        let formData = new FormData();
        
        formData.append("email", localStorage.getItem("email"));
        console.log(this.props.match.params.id)
        formData.append("title", this.state.title);
        formData.append("blog", this.state.message);
        

        const url = "http://localhost:80/doctor/drblog.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '0') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert(" Blog Posted");
                }
            }).catch(res => console.log(Error))
            window.location.reload(true);

    }


    render()
    {
        return(

            <IonApp>
                <IonHeader>
                    <Sidemen />
                    <IonToolbar><IonTitle>Blogs</IonTitle></IonToolbar>
                </IonHeader>
                <IonContent>
                    <div class="card">
                         <IonItem>
                            <IonLabel position="floating">currentdate</IonLabel>
                            <IonInput value={this.state.currentdate} readonly='true' ></IonInput>
                        </IonItem> 

                        <IonItem>
                            <IonLabel position="floating">Title</IonLabel>
                            <IonInput value={this.state.title} onIonChange={this.handletitle}  ></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Blogs</IonLabel>
                            <IonTextarea rows='5' value={this.state.message} onIonChange={this.handlemessage}  ></IonTextarea>
                        </IonItem>

                        <IonButton onClick={this.submitbtn}>Sent</IonButton>


                    </div>


                   

                </IonContent>

            </IonApp>
        );  
    }

}
export default insertblog;