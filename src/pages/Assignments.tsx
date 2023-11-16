import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import AssignmentsListCard from '../components/AssignmentsListCard';
import AssignmentsEvaluationCard from '../components/AssignmentsEvaluationCard';
import Container from '../components/Container';

const Assigments: React.FC = () => {
  const [segmentValue, setSegmentValue] = useState('list');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/app/home'></IonBackButton>
          </IonButtons>
          <IonTitle>Assignments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSegment value={segmentValue}>
        <IonSegmentButton value='list' onClick={() => setSegmentValue('list')}>
          <IonLabel>List</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value='evaluation'
          onClick={() => setSegmentValue('evaluation')}
        >
          <IonLabel>Evaluation</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonContent>
        <Container>
          {segmentValue === 'list' ? (
            <div>
              <h1 className='text-grey900 font-bold mt-8'>New Assignments</h1>
              <div>
                <AssignmentsListCard />
                <AssignmentsListCard />
                <AssignmentsListCard />
                <AssignmentsListCard />
                <AssignmentsListCard />
              </div>
            </div>
          ) : (
            <div>
              <h1 className='text-grey900 font-bold mt-8'>Completed</h1>
              <div>
                <AssignmentsEvaluationCard />
                <AssignmentsEvaluationCard />
                <AssignmentsEvaluationCard />
                <AssignmentsEvaluationCard />
                <AssignmentsEvaluationCard />
              </div>
            </div>
          )}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Assigments;
