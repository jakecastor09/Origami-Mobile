import { IonContent, IonIcon, IonPage } from '@ionic/react';
import React from 'react';
import {
  chevronForwardOutline,
  logOutOutline,
  peopleOutline,
} from 'ionicons/icons';
import logo from '../assets/logo-sm.png';
import parent from '../assets/parent-img.png';
const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='relative'>
          <div className='relative h-48 z-10 bg-gradient-to-bl from-blue600 to-blue300 flex justify-center items-center'>
            <img src={logo} alt='Logo' className='w-16 h-16' />
          </div>
          <div className='-translate-y-8 relative z-50 px-4'>
            <img
              src={parent}
              alt='Parent'
              className='rounded-full w-16 h-16  border-2 border-white shadow-md'
            />
            <div>
              <h1 className='text-grey900 font-semibold text-lg mt-1'>
                Angelica Castor
              </h1>
              <p className='text-grey400 text-sm -translate-y-1'>Parent</p>
            </div>
          </div>
          <div className='grid grid-cols-1 divide-y px-4'>
            <div className='py-4 font-semibold text-grey-900 text-sm flex items-center gap-2 border-t'>
              <IonIcon
                icon={peopleOutline}
                slot='start'
                className='text-lg text-blue700'
              ></IonIcon>
              <div>My Children</div>
              <IonIcon
                icon={chevronForwardOutline}
                className='text-lg text-grey900 ml-auto'
              ></IonIcon>
            </div>
            <div className='py-4 font-semibold text-grey-900 text-sm flex items-center gap-2'>
              <IonIcon
                icon={logOutOutline}
                slot='start'
                className='text-lg text-blue700'
              ></IonIcon>
              <div>Change Password</div>
              <IonIcon
                icon={chevronForwardOutline}
                className='text-lg text-grey900 ml-auto'
              ></IonIcon>
            </div>
            <div className='py-4 font-semibold text-grey-900 text-sm flex items-center gap-2'>
              <IonIcon
                icon={logOutOutline}
                slot='start'
                className='text-lg text-blue700'
              ></IonIcon>
              <div>Change Password</div>
              <IonIcon
                icon={chevronForwardOutline}
                className='text-lg text-grey900 ml-auto'
              ></IonIcon>
            </div>
            <div className='py-4 font-semibold text-grey-900 text-sm flex items-center gap-2'>
              <IonIcon
                icon={logOutOutline}
                slot='start'
                className='text-lg text-blue700'
              ></IonIcon>
              <div>Change Password</div>
              <IonIcon
                icon={chevronForwardOutline}
                className='text-lg text-grey900 ml-auto'
              ></IonIcon>
            </div>
            <div className='py-4 font-semibold text-grey-900 text-sm flex items-center gap-2'>
              <IonIcon
                icon={logOutOutline}
                slot='start'
                className='text-lg text-blue700'
              ></IonIcon>
              <div>Logout</div>
              <IonIcon
                icon={chevronForwardOutline}
                className='text-lg text-grey900 ml-auto'
              ></IonIcon>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
