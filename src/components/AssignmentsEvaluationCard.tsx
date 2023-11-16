import React from 'react';
import searchImg from '../assets/search-img.png';
import { useIonRouter } from '@ionic/react';

const AssignmentsEvaluationCard: React.FC = () => {
  const id = 1;
  const router = useIonRouter();

  const handleClick = () => {
    router.push(`/assignments/evaluation/${id}`, 'forward');
  };
  return (
    <div
      className='border border-slate-400 p-4 rounded-xl mt-4'
      onClick={handleClick}
    >
      <div className='flex gap-4'>
        <div>
          <div className='bg-green500 rounded-full inline-block p-3'>
            <img src={searchImg} alt='Paper' className='translate-x-1' />
          </div>
        </div>
        <div>
          <h1 className='text-grey900'>Sample Assignment 1</h1>
          <p className='text-green600'>Mathematics</p>
          <div className='mt-2 flex flex-col space-y-1'>
            <span className='text-xs text-grey500'>Teacher: Molina Castor</span>
            <span className='text-xs text-grey500'>
              Submission Date: Mon Jul 3,2023
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='px-3 py-1 text-xs rounded-full text-green900 bg-green100'>
            Checked
          </div>
          <div className='flex justify-center'>
            <span className='text-xs translate-y-1 whitespace-nowrap text-grey600 font-bold self-start text-right'>
              100 points
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsEvaluationCard;
