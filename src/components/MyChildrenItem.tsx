import React from 'react';
import parent from '../assets/parent-img.png';
interface Props {
  id?: string;
}
const MyChildrenItem: React.FC<Props> = ({ id }) => {
  return (
    <div className='flex gap-3 items-center py-4' id={id}>
      <img src={parent} alt='' className='rounded-full w-12 h-12' />
      <div>
        <h1 className='text-grey900 font-semibold'>Angelica Castor</h1>
        <p className='text-grey400 text-sm'>Grade 12</p>
      </div>
      <div className='ml-auto text-xs font-semibold text-blue800'>Active</div>
    </div>
  );
};

export default MyChildrenItem;
