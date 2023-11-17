import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import Container from '../components/Container';
import MyChildrenItem from '../components/MyChildrenItem';
import MyChildrenItemsContainer from '../components/MyChildrenItemsContainer';
import Alert from '../components/Alert';

const MyChildren: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/profile'></IonBackButton>
          </IonButtons>
          <IonTitle>My Children's </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <MyChildrenItemsContainer>
            <Alert
              id='children1'
              children={<MyChildrenItem id='children1' />}
            />
            <Alert
              id='children2'
              children={<MyChildrenItem id='children2' />}
            />
            <Alert
              id='children3'
              children={<MyChildrenItem id='children3' />}
            />
          </MyChildrenItemsContainer>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default MyChildren;
