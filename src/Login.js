import React, { Component } from 'react';
import {
  IonApp, IonCol, IonContent, IonGrid, IonSelectOption,
  IonSelect, IonItem, IonLabel, IonRow, IonInput, IonHeader, IonButton, IonCard, IonCardTitle
} from '@ionic/react';
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      category: "",
      value: "2",
      id: ""
    };
    this.submitbtn = this.submitbtn.bind(this);

  }


  handlepass = e => {
    this.setState({ password: e.target.value });
  };

  handleemail = e => {
    this.setState({ email: e.target.value });
  };

  handlecat = e => {
    this.setState({ category: e.target.value });

  };

  hidecom() {
    document.getElementById("hide").style.display = "none";
  }


  submitbtn = e => {
    console.log(this.state)
    let formData = new FormData();
    var a = this.state.category;
    var b = a.toString();
    console.log(a)
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    const url = "http://localhost:80/doctor/login.php";
    Axios.post(url, formData)
      .then((res) => {
        const responseMsg = res.data;
        this.state.id = responseMsg.id;
        window.localStorage.setItem('niki', true)



        if (responseMsg.success == '0') {


          alert("Invalid Email & Password")

        }

        else {

          if (this.state.category == '1') {
            localStorage.setItem('login', true)
            localStorage.setItem('email', this.state.email)
            console.log(this.state)
            this.props.history.push('/Drdash')

          }
          else {
            localStorage.setItem('login', true)
            this.props.history.push('/Pdash')
            localStorage.setItem('email', this.state.email)
          }
        }
        console.log(res.data)

        console.log(res.data.status);



      }).catch(res => console.log(Error))




    e.preventDefault();

  }



  render() {
    return (

      <IonApp>

        <IonHeader>
          <h2>Login</h2>
        </IonHeader>

        <IonContent class="height100VH">
        <div class="cen">

          <IonGrid>
         
          
                  <IonItem>
                    <IonLabel position="floating">EmailId: </IonLabel>
                    <IonInput type="emailid" value={this.state.email} onIonChange={this.handleemail} name="emailid"></IonInput>
                  </IonItem>
                
              
                  <IonItem>
                    <IonLabel position="floating">Password: </IonLabel>
                    <IonInput type="password" value={this.state.password} onIonChange={this.handlepass} name="password"></IonInput>
                  </IonItem>
               

             
                
                  <IonItem>
                    <IonLabel>Select</IonLabel>
                    <IonSelect onIonChange={this.handlecat} value={this.state.category} name="category">
                      <IonSelectOption value="1">Doctor</IonSelectOption>
                      <IonSelectOption value="2">Patient</IonSelectOption>

                    </IonSelect>
                  </IonItem>
                
              


              <IonButton name="login" id="submit" onClick={this.submitbtn}>
                Login
          </IonButton><br/><br/>
          <a href="/forget">Forget Password</a>
            </IonGrid>
        </div>
        
        </IonContent>

      </IonApp>
    );
  }
}

export default Login;
