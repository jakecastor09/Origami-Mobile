import React from 'react';
import student1 from '../assets/student-1.png';

const GradebookCard: React.FC = () => {
  return (
    <div className='p-6 bg-gradient-to-bl from-green300 to-green600 rounded-xl'>
      <h1 className='text-green50 text-xl font-semibold '>Student Gradebook</h1>
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
                <h1 className='text-green200 text-xs'>Enrollment Grade</h1>
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
  );
};

export default GradebookCard;
