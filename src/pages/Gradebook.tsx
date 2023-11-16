import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import Container from '../components/Container';
import GradebookCard from '../components/GradebookCard';
import GradebookTable from '../components/GradebookTable';

const Gradebook: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/app/home'></IonBackButton>
          </IonButtons>
          <IonTitle>Gradebook</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <GradebookCard />
          <GradebookTable />
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Gradebook;
