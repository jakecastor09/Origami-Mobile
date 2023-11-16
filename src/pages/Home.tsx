import { IonContent, IonIcon, IonPage, useIonRouter } from '@ionic/react';
import { mailOutline, notificationsOutline } from 'ionicons/icons';
import React from 'react';
import assignment from '../assets/assignment-img.png';
import calendar from '../assets/calendar-img.png';
import gradebook from '../assets/gradebook-img.png';
import parent from '../assets/parent-img.png';
import student1 from '../assets/student-1.png';

import AnnouncementCard from '../components/AnnouncementCard';
import Container from '../components/Container';
import OverviewCard from '../components/OverviewCard';
import OverviewCardContainer from '../components/OverviewCardContainer';

const Home: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonContent>
        <Container>
          <header className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <img
                src={parent}
                alt='Parent'
                width={'50px'}
                className='rounded-full'
              />
              <div>
                <h1 className='font-bold text-xl text-grey900 translate-y-1'>
                  Welcome
                </h1>
                <p className='text-softGrey'>Angelica</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <IonIcon
                icon={mailOutline}
                slot='end'
                className='text-2xl text-grey900'
              />
              <IonIcon
                icon={notificationsOutline}
                slot='end'
                className='text-2xl text-grey900'
                onClick={() => router.push('/notification', 'forward')}
              />
            </div>
          </header>

          {/* DashBoard */}
          <div className='py-10'>
            <div className='flex justify-between items-center'>
              <h1 className='text-grey900 font-bold text-2xl'>Dashboard</h1>
              <img
                src={student1}
                alt='Student1'
                width={'40px'}
                className='rounded-full'
              />
            </div>
          </div>

          <AnnouncementCard />

          <OverviewCardContainer>
            <OverviewCard
              imageSrc={calendar}
              name={'attendance'}
              className={'bg-gradient-to-bl from-blue300 to-blue600'}
            />
            <OverviewCard
              imageSrc={assignment}
              name={'assignments'}
              className={'bg-gradient-to-bl from-yellow300 to-yellow600'}
            />
            <OverviewCard
              imageSrc={gradebook}
              name={'gradebook'}
              className={'bg-gradient-to-bl from-green300 to-green600'}
            />
          </OverviewCardContainer>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Home;
