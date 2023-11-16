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

const AssignmentEvaluationResult: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/assignments'></IonBackButton>
          </IonButtons>
          <IonTitle>Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          <div className='rounded-md shadow-md'>
            <div className='rounded-t-md bg-green700'>
              <h1 className='font-bold text-xl p-4 text-white'>
                Evaluation Result
              </h1>
            </div>
            <div className='p-4 relative'>
              <div className='flex flex-col gap-2 '>
                <div>
                  <div className='text-grey500'>Student Name</div>
                  <h1 className='text-grey900 text-lg'>Molina Castor</h1>
                </div>
                <div>
                  <div className='text-grey500'>Title</div>
                  <h1 className='text-grey900 text-lg'>Sample Assignment</h1>
                </div>
                <div>
                  <div className='text-grey500'>Subject</div>
                  <h1 className='text-grey900 text-lg'>Mathematics 10</h1>
                </div>
                <div>
                  <div className='text-grey500'>Remark</div>
                  <h1 className='text-grey900 text-lg'>Test</h1>
                </div>
              </div>
              <div className='grid grid-cols-1 text-center divide-y divide-green900 absolute top-6 right-8 bg-green50 p-2 rounded-full h-20 w-20'>
                <span className='text-green900 font-bold text-xl translate-y-1'>
                  99
                </span>
                <span className='text-green900 font-bold text-xl'>100</span>
              </div>
            </div>
          </div>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default AssignmentEvaluationResult;
