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
            <MyChildrenItem />
            <MyChildrenItem />
            <MyChildrenItem />
          </MyChildrenItemsContainer>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default MyChildren;
