import imgAssignment from '../assets/assignment-img-sm.png';

const AssignmentsListCard = () => {
  return (
    <div className='border border-slate-400 p-4 rounded-xl mt-4'>
      <div className='flex gap-4'>
        <div>
          <div className='bg-yellow500 rounded-full inline-block p-3'>
            <img src={imgAssignment} alt='Paper' />
          </div>
        </div>
        <div>
          <h1 className='text-grey900'>Sample Assignment 1</h1>
          <p className='text-yellow600'>Mathematics</p>
          <div className='mt-2 flex flex-col space-y-1'>
            <span className='text-xs text-grey500'>Teacher: Molina Castor</span>
            <span className='text-xs text-grey500'>
              Submission Date: Mon Jul 3,2023
            </span>
          </div>
        </div>
        <span className='text-xs translate-y-1 whitespace-nowrap text-grey600 font-bold self-start'>
          100 points
        </span>
      </div>
    </div>
  );
};

export default AssignmentsListCard;
