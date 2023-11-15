import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/* Theme variables */
import { home, person, personCircle, wallet } from 'ionicons/icons';
import Home from './pages/Home';
import Login from './pages/Login';
import './styles/tailwind.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route exact component={Login} path={'/'} />
        <Route exact component={Home} path={'/home'} />
      </IonRouterOutlet>
      {/* Bottom Tab Bar */}
      <IonTabBar slot='bottom'>
        <IonTabButton tab='home' href='/home'>
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab='payment' href='/payment'>
          <IonIcon icon={wallet} />
          <IonLabel>Payment</IonLabel>
        </IonTabButton>

        <IonTabButton tab='student' href='/student'>
          <IonIcon icon={person} />
          <IonLabel>Student</IonLabel>
        </IonTabButton>

        <IonTabButton tab='profile' href='/profile'>
          <IonIcon icon={personCircle} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default App;
