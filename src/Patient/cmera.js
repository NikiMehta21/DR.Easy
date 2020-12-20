import { IonApp, IonContent, IonLabel, IonItem, IonButton } from "@ionic/react";
import React, { Component, useState } from "react";
import drimg from '../dr.png';



class camera extends Component {

    constructor(props) {

        super(props);
        this.state = {
            url: "../dr.png",
            picurl: "",
            perurl: "",
        }
    }



    componentDidMount() {
        if (this.state.picurl.startsWith('blob')) {
            URL.revokeObjectURL(this.state.picurl);
        }

    }
    handlefile = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files.item(0);
            const url = URL.createObjectURL(file);
            console.log(url)
            this.setState({ picurl: url });


        }
        console.log('files:', e.target.files);
    };



    submitbtn = e => {

        e.preventDefault();
        if (this.state.picurl.startsWith('blob:')) {
            this.state.perurl = this.state.picurl;

        }
    }
    render() {

        return (

            <IonApp>
                <IonContent>
                    <IonItem>
                        <IonLabel>Image</IonLabel>
                        <div>
                            <input type="file" accept="image/*" onChange={this.handlefile} />
                            <img src={this.state.picurl} style={{ width: '20%', height: '30%' }} />
                        </div>
                    </IonItem>

                    <IonButton onClick={this.savebtn}>Save</IonButton>
                </IonContent>
            </IonApp>

        );
    }

} export default camera