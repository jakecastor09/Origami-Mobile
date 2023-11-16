import React from 'react';
import teacher from '../assets/teacher-img.png';

const NotificationItem: React.FC = () => {
  return (
    <div className='flex item-center gap-2'>
      <div className='flex gap-4'>
        <div className='flex gap-2 items-center'>
          <div className='rounded-full bg-blue600 w-2 h-2'></div>
          <div className='rounded-full w-12 h-12'>
            <img
              src={teacher}
              alt='Teacher'
              className='rounded-full w-12 h-12'
            />
          </div>
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <h1 className=' text-grey900 font-bold'>Assignment</h1>
            <span className='text-xs'>Today</span>
          </div>
          <p className='text-xs text-grey400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            tempore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
