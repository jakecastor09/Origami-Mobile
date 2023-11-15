import React from 'react';
import { alertCircleOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const AnnouncementCard: React.FC = () => {
  return (
    <div className='outline outline-1 outline-blue700 p-6 rounded-md bg-blue50'>
      <div className='flex justify-between items-center'>
        <h1 className='text-blue900 text-xl'>Announcement</h1>
        <IonIcon
          icon={alertCircleOutline}
          slot='end'
          className='text-3xl text-blue900'
        />
      </div>
      <p className='text-sm mt-2 text-blue900'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum saepe...
      </p>
      <p className='mt-2 text-blue900  text-sm'>
        Teacher Angel, Date: September 6, 2023
      </p>
    </div>
  );
};

export default AnnouncementCard;
