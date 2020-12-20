import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonText, IonToolbar, IonTitle, IonInput, IonIcon } from '@ionic/react';
import Axios from 'axios';
import { play, personCircle, helpOutline, timeSharp } from 'ionicons/icons';
class stafflogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      modelvalue: "0",
    }
  }

  componentDidMount() {
    this.submitbtn.disabled = "true"
  }

  handlepass = e => {
    this.setState({ password: e.target.value });
  };

  handleuser = e => {
    this.setState({ username: e.target.value });
  };

  submitbtn = e => {
    console.log(this.state)
    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);


    const url = "http://localhost:80/doctor/stafflogin.php";
    Axios.post(url, formData)
      .then((res) => {
        const responseMsg = res.data;
        //this.state.id=responseMsg.id;
        if (responseMsg.success == '0') {


          alert("Something goes wrong");

        }
        else {
          localStorage.setItem('staffuser', this.state.username)
          this.props.history.push('/attenfance')
          //alert("Login Succcessfull");
         
        }
      }).catch(res => console.log(Error))


  }

  render() {
    return (
      <IonApp >

        
          <IonHeader>
            <h2>Login</h2>
          </IonHeader>

          <IonContent>

            
            <IonIcon  icon={personCircle} class='con'  />
            
          <div class="cen">
           
            
           
              <IonGrid>



                <IonItem>
                  <IonLabel position="floating">Username </IonLabel>
                  <IonInput type="text" value={this.state.username} onIonChange={this.handleuser} name="emailid"></IonInput>
                </IonItem>


                <IonItem>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="password" value={this.state.password} onIonChange={this.handlepass} name="password"></IonInput>
                </IonItem>









                <IonButton name="login" id="submit" onClick={this.submitbtn} class="btn2" color='dark'>
                  Login
          </IonButton>
              </IonGrid>
              </div>
            
          </IonContent>
        
      </IonApp>
    )
  }


} export default stafflogin