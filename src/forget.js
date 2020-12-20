import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import menu from './menu';
import Axios from 'axios';
class forget extends Component {
    constructor(props) {
        super(props)
        var val = Math.floor(1000 + Math.random() * 9000);
        this.state = {
            showMe: false,
            otp:val,
            valueotp:"",
            email:""
        };
        this.submitbtn = this.submitbtn.bind(this);
        this.updatebtn = this.updatebtn.bind(this);
    }


    handleotp = e => {
        this.setState({ valueotp: e.target.value });
      };

      handleemail = e => {
        this.setState({ email: e.target.value });
      };

      updatebtn = e => {
        
       
        if(this.state.otp == this.state.valueotp)
        {
            //alert("Its True");
            localStorage.setItem("email",this.state.email);
            this.props.history.push('/Update')
          
        }

        else
        {
            alert("Wrong OTP")
        }
        console.log(this.state)

    };

    submitbtn = e => {
        
        let formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("otp", this.state.otp);
        const url = "http://localhost:80/doctor/forget.php";
    Axios.post(url, formData)
      .then((res) => {
        console.log(res)
        }).catch(res => console.log(Error))


      

    e.preventDefault();
        this.setState({
            showMe: true,
            
        })
        console.log(this.state)

    };

    render() {
        return (
            
            <IonApp>
               
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Forget Password
                    </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                <menu>
                    <IonToolbar>
                        <IonTitle>We Will Sent You a OTP On Your  Mail </IonTitle>
                    </IonToolbar>



                    <IonItem>
                        <IonLabel position="floating">Enter Your Email: </IonLabel>
                        <IonInput id="email"  onIonChange={this.handleemail} value={this.state.email}></IonInput>
                    </IonItem>



                    
                        <IonButton type="submit" color="dark" onClick={this.submitbtn}>Submit</IonButton>
                    

                    {
                        this.state.showMe ?
                            <div>
                                <IonItem>
                                    <IonLabel position="floating">Enter OTP: </IonLabel>
                                    <IonInput id="otp" onIonChange={this.handleotp}  value={this.state.valueotp}></IonInput>
                                </IonItem>
                                <IonButton type="submit" color="dark" onClick={this.updatebtn}>Update Password</IonButton>
                            </div>

                            : null
                    }
                        </menu>
                </IonContent>
                
            </IonApp>
            
        );
    }
}

export default forget;