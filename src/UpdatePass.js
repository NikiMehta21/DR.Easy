import React, { Component } from 'react';
import { IonApp, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import Axios from 'axios';
class UpdatePass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: "",
            confirmpassword: "",
            type: "text",
            email: ""

        };
        this.submitbtn = this.submitbtn.bind(this);
    }


    handlePassword = e => {
        this.setState({ password: e.target.value });
    };

    handleCpassword = e => {
        this.setState({ confirmpassword: e.target.value });
    };

    submitbtn = e => {
        this.setState.email = localStorage.getItem('email')

        if (this.state.confirmpassword == this.state.password) {
            alert("Its True")
        }
        console.log(this.state)

        let formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        const url = "http://localhost:80/doctor/update.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                 if (responseMsg.success == '0') {


                    alert("Sorry Not Updated")

                }
                else {
                    this.props.history.push('/login')
                }
            }).catch(res => console.log(Error))




        e.preventDefault();

    };


    eye = () => this.setState(({ type }) => ({
        type: type === 'password' ? 'password' : 'text'
    }))

    render() {
        return (

            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>UpdatePasswoord</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="4">
                                <IonItem>
                                    <IonLabel position="floating">Your Password:</IonLabel>
                                    <IonInput type="password" onIonChange={this.handlePassword} value={this.state.password}>

                                    </IonInput>

                                </IonItem>
                            </IonCol>

                            <IonCol size="4">
                                <IonItem>
                                    <IonLabel position="floating">Confirm  Password:</IonLabel>
                                    <IonInput type="password" onIonChange={this.handleCpassword} value={this.state.confirmpassword}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonButton onclick={this.submitbtn}>Update Password</IonButton>
                </IonContent>
            </IonApp>



        );

    }



}
export default UpdatePass;

