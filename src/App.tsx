import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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
import Assigments from './pages/Assignments';
import Gradebook from './pages/Gradebook';
import Login from './pages/Login';
import Tabs from './pages/Tabs';
import './styles/tailwind.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={'/'} component={Login} />
        <Route exact path='/gradebook' component={Gradebook} />
        <Route exact path='/assignments' component={Assigments} />
        <Route path={'/app'} component={Tabs} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
