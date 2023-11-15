import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import Container from '../components/Container';
import student1 from '../assets/student-1.png';

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
          <div className='p-6 bg-gradient-to-bl from-green300 to-green600 rounded-xl'>
            <h1 className='text-green50 text-xl font-semibold '>
              Student Gradebook
            </h1>
            <div className='mt-4 '>
              <p className='text-green50'>Student No. S23-Tr-00001</p>
              <div className='mt-3 flex gap-3 items-center'>
                <img
                  src={student1}
                  alt='Student1'
                  width={'90px'}
                  className='rounded-full'
                />
                <div>
                  <div className='flex flex-col gap-y-2'>
                    <div>
                      <h1 className='text-green200 text-xs'>Name</h1>
                      <p className='text-green50 '>Jake Castor</p>
                    </div>
                    <div>
                      <h1 className='text-green200 text-xs'>
                        Enrollment Grade
                      </h1>
                      <p className='text-green50 '>Grade 12</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='flex flex-col gap-1'>
                    <div>
                      <h1 className='text-green200 text-xs'>Section</h1>
                      <p className='text-green50 '>Test G10</p>
                    </div>
                    <div>
                      <h1 className='text-green200 text-xs'>School Year</h1>
                      <p className='text-green50 '>2023-2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <IonGrid className='ion-margin-top'>
            <IonRow>
              <IonCol size='6'>
                <IonItem>
                  <IonSelect label='Academic Year' labelPlacement='floating'>
                    <IonSelectOption value='apple'>2023-2024</IonSelectOption>
                    <IonSelectOption value='banana'>2022-2023</IonSelectOption>
                    <IonSelectOption value='orange'>2021-2022</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol size='6'>
                <IonItem>
                  <IonSelect label='Semester' labelPlacement='floating'>
                    <IonSelectOption value='apple'>
                      1st Semester
                    </IonSelectOption>
                    <IonSelectOption value='banana'>
                      2nd Semester
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonSelect label='Quarter' labelPlacement='floating'>
                    <IonSelectOption value='apple'>1st Quarter</IonSelectOption>
                    <IonSelectOption value='banana'>
                      2nd Quarter
                    </IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Gradebook;
