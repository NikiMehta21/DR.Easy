import React from 'react';
import { Component } from 'react';
import { play, personCircle, helpOutline, timeSharp } from 'ionicons/icons';
import Axios from 'axios';



import {
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonContent,
  IonApp,
  IonHeader,
  IonLabel,
  IonItem,
  IonSelectOption,
  IonSelect,
  IonTextarea, IonButton, IonIcon
  , IonMenuButton, IonButtons, IonMenu, IonToolbar, IonTitle, IonMenuToggle, IonBackButton, IonSplitPane
} from '@ionic/react';

import menu from './menu';
import Temp from './temp';
// import { Link } from 'react-router-dom';



class Registration extends Component {

  constructor(props) {

    super(props);
    this.state = {
      name: "",
      phoneno: "",
      date: "",
      email: "",
      pass: "",
      cpass: "",
      cstate: "",
      category: "",
      address: "",
      city: "",
      contry: "",
      state: "",
      formSubmitted: false,
      confirmpass: "",
      formError: false,
      nameerr: "",
      emailerr: "",
      emptyerr: ""
    }



  }




  valid() {

    if (this.state.name == "" && this.state.email == "" && this.state.date == "" && this.state.gender == "" && this.state.pass == "") {
      this.setState({ emptyerr: "Field Reqired" })
      this.setState({ formError: true })
    }

    if (this.state.pass == this.state.cpass) {
      this.setState({ confirmpass: "InCorrect Password" })
      this.setState({ formError: true })
    }
    else {
      this.setState({ confirmpass: "Correct Password" })
    }

    if ((!this.state.email.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"))) {
      this.setState({ emailerr: "Invalid Email" })
      this.setState({ formError: true })
    }
    if (this.state.name.length < 6) {
      this.setState({ nameerr: "Enter your Full Name" })
      this.setState({ formError: true })
    }


  }





  handlename = e => {
    this.setState({ name: e.target.value });
  };

  handlephone = e => {
    this.setState({ phoneno: e.target.value });

  };

  handledate = e => {
    this.setState({ date: e.target.value });
  };

  handleemail = e => {
    this.setState({ email: e.target.value });
  };

  handlepass = e => {
    this.setState({ pass: e.target.value });
  };

  handlecpass = e => {

    if (e.handlecpass !== e.handlepass) {

    }
  };

  handlecat = e => {
    this.setState({ category: e.target.value });
  };

  handlestate = e => {
    this.setState({ cstate: e.target.value });
  };

  handlecity = e => {
    this.setState({ city: e.target.value });
  };

  handlecontry = e => {
    this.setState({ contry: e.target.value });
  };

  handlegender = e => {
    this.setState({ gender: e.target.value });
  };

  handleadd = e => {
    this.setState({ address: e.target.value });
  };






  submitbtn = e => {


    e.preventDefault();

    
      alert("submit");

    



    console.log(this.state);



    console.log(this.state);
    e.preventDefault();
    let formData = new FormData();
    formData.append("name1", this.state.name);
    formData.append("birthdate", this.state.date);
    formData.append("phone", this.state.phoneno);
    formData.append("email", this.state.email);
    formData.append("password", this.state.pass);
    formData.append("category", this.state.category);
    formData.append("gender", this.state.gender);
    formData.append("country", this.state.contry);
    formData.append("state", this.state.cstate);
    formData.append("city", this.state.city);
    formData.append("address", this.state.address);

    const url = "http://localhost:80/doctor/registration.php";
    Axios.post(url, formData)
      .then(res => console.log(res.data))

      .catch(res => console.log(Error));


      this.props.history.push('/Login')

    // console.log(this.state);
  }









  render() {




    return (


       

      <IonApp >
        


        <IonHeader>
          <IonTitle>Registration</IonTitle>


        </IonHeader>


        <IonContent class="ion-padding">

          <center >
            <form >

              <IonGrid>
                <IonRow>
                  <IonCol size="2"></IonCol>
                  <IonCol size="4">
                    <IonItem>
                      <IonLabel position="floating">Full Name: </IonLabel>
                      <IonInput type="text" value={this.state.name} onIonChange={this.handlename} id="name" name="name"></IonInput>
                      <p>{this.state.nameerr}</p>
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem>
                      <IonLabel position="floating"> BirthDate: </IonLabel>
                      <IonInput type="date" value={this.state.date} onIonChange={this.handledate} placeholder=" " id="birthdate" name="birthdate" ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="2"></IonCol>
                  <IonCol size="4">
                    <IonItem>
                      <IonLabel position="floating">Email: </IonLabel>
                      <IonInput type="email" value={this.state.email} onIonChange={this.handleemail} pattern="email" id="email" name="email"></IonInput>
                      <p>{this.state.emailerr}</p>
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem>
                      <IonLabel position="floating"> PhoneNo: </IonLabel>
                      <IonInput type="number" value={this.state.phoneno} onIonChange={this.handlephone} pattern="tel" name="phoneno"></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="2"></IonCol>
                  <IonCol size="4">
                    <IonItem>
                      <IonLabel position="floating">Password: </IonLabel>
                      <IonInput type="password" value={this.state.pass} onIonChange={this.handlepass} name="pass" id="pass"></IonInput>
                      <span id='message'></span>
                    </IonItem>
                  </IonCol>

                  <IonCol size="4">
                    <IonItem>
                      <IonLabel position="floating"> Confirm Password: </IonLabel>
                      <IonInput type="password" name="cpass" id="pass"></IonInput>
                      <p>{this.state.confirmpass}</p>
                    </IonItem>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="2"></IonCol>
                  <IonCol size="4">
                    <IonItem>
                      <IonLabel>Select</IonLabel>
                      <IonSelect onIonChange={this.handlecat} value={this.state.category} name="category">
                        <IonSelectOption value="1">Doctor</IonSelectOption>
                        <IonSelectOption value="2">Patient</IonSelectOption>

                      </IonSelect>
                    </IonItem>
                  </IonCol>


                  <IonCol size="4">
                    <IonItem>
                      <IonLabel>Gender</IonLabel>
                      <IonSelect name="gender" value={this.state.gender} onIonChange={this.handlegender}>
                        <IonSelectOption value="1">Female</IonSelectOption>
                        <IonSelectOption value="2">Male</IonSelectOption>
                      </IonSelect>
                    </IonItem></IonCol>
                </IonRow>


                <IonRow>
                  <IonCol size='3'>
                    <select name="country" onChange={this.handlecontry} class="countries" id="countryId" style={{ padding: '10px', marginTop: '10px' }}>
                      <option value="">Select Country</option>
                    </select>
                  </IonCol>


                  <IonCol size='3'>
                    <select name="state" class="states" onChange={this.handlestate} id="stateId" style={{ padding: '10px', marginTop: '10px' }}>
                      <option value="">Select State</option>
                    </select>
                  </IonCol>

                  <IonCol size="3">
                    <select name="city" class="cities" onChange={this.handlecity} id="cityId" style={{ padding: '10px', marginTop: '10px' }}>
                      <option value="">Select City</option>
                    </select>
                  </IonCol>
                </IonRow>






                <IonRow>



                  <IonCol size="6">
                    <IonItem>
                      <IonLabel>Address</IonLabel>
                      <IonTextarea value={this.state.address} onIonChange={this.handleadd} name="address" placeholder="House No,SocietyName,Area,District" rows={3} cols={20}></IonTextarea>
                    </IonItem>

                  </IonCol>
                </IonRow>










                <IonRow>

                  <IonCol size="3"></IonCol>
                  <IonCol size="6">
                    <div class="btn">
                      <IonButton color="dark" onClick={this.submitbtn} >Sign Up</IonButton>
                    </div>

                  </IonCol>
                </IonRow>
              </IonGrid>

            </form>
          </center>
        </IonContent>

        
      </IonApp>




    );

  }

}

export default Registration;

