import React from 'react';
import clsx from 'clsx';
import { useIonRouter } from '@ionic/react';

interface Props {
  imageSrc: string;
  name: string;
  className: string;
}

const OverviewCard: React.FC<Props> = ({
  imageSrc,
  name,
  className,
}: Props) => {
  const router = useIonRouter();
  const handleClick = () => {
    router.push(`/${name}`, 'forward');
  };
  return (
    <div className={clsx('p-6 rounded-2xl', className)} onClick={handleClick}>
      <h1 className='text-white text-xl capitalize'>{name} Overview</h1>
      <div className='flex justify-end'>
        <img src={imageSrc} width={'80px'} alt='' className='pt-4' />
      </div>
      <h1 className='text-white text-3xl font-bold capitalize'>{name}</h1>
    </div>
  );
};

export default OverviewCard;
