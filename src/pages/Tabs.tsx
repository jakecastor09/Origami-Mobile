import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { home, person, personCircle, wallet } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';

import Home from './Home';
import Gradebook from './Gradebook';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/app/home' component={Home} />
        <Route exact path='/app/home/gradebook' component={Gradebook} />
        <Route exact path='/app'>
          <Redirect to='/app/home' />
        </Route>
      </IonRouterOutlet>
      {/* Bottom Tab Bar */}
      <IonTabBar slot='bottom'>
        <IonTabButton tab='home' href='/app/home'>
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab='payment' href='/app/payment'>
          <IonIcon icon={wallet} />
          <IonLabel>Payment</IonLabel>
        </IonTabButton>

        <IonTabButton tab='student' href='/app/student'>
          <IonIcon icon={person} />
          <IonLabel>Student</IonLabel>
        </IonTabButton>

        <IonTabButton tab='profile' href='/app/profile'>
          <IonIcon icon={personCircle} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
