
      import { IonApp, IonContent } from '@ionic/react';
import React, { Component } from 'react';
      import Map from './map';
      
      class HMap extends Component {
      
          render() {
              return(
                  <IonApp>
                      <IonContent>
                  <div style={{ margin: '100px' }}>
                      <Map
                          google={this.props.google}
                          center={{lat: 23.6038615, lng: 72.9639595}}
                          height='300px'
                          zoom={15}
                      />
                  </div>
                  </IonContent>
                  </IonApp>
              );
          }
      }
      
      export default HMap;