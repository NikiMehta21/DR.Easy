// import { IonLabel } from "@ionic/react";
// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Dimensions, View } from "react";
// import { TabNavigator } from "react";



// class LocationA extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: null,
//       longitude: null,
//       error:null,
//     };
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//        (position) => {
//          console.log("wokeeey");
//          console.log(position);
//          this.setState({
//            latitude: position.coords.latitude,
//            longitude: position.coords.longitude,
//            error: null,
//          });
//        },
//        (error) => this.setState({ error: error.message }),
//        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//      );
//    }


//   render() {
//     return (
//       <View>
//      <IonLabel> {this.state.latitude} </IonLabel>
//      <IonLabel> {this.state.longitude}</IonLabel>
//      <IonLabel> {this.state.error} </IonLabel>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default LocationA;